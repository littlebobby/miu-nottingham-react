import React, { Component } from 'react'
import styles from './CreateEvent.module.scss';
import { connect } from 'react-redux';
import { createEvent } from '../../../store/actions/eventActions'; //?
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from 'components'

import firebase from '../../../../config/fbConfig';


class CreateEvent extends Component {
  state = {
    title: '',
    brief: '',
    type: 'Lecture',
    imageURL: '',
    location: '',
    startTime: new Date(),
    endTime: new Date(),


    percentage: 0, // no need to store this into firebase 
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createEvent(this.state)
    // ! redirect - history is passed by react router
    this.props.history.push('/')
  }
  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  // FIXME: async
  handleFileUpload = (e) => {
    // get file
    if (e.target.files[0] === undefined) {
      return 
    }
    let file = e.target.files[0];
    console.log(e.target.files)
    // create a storage ref
    let storageRef = firebase.storage().ref('photos/' + file.name);
    // upload file
    let task = storageRef.put(file);
    // update progress bar
    console.log(this)
    task.on('state_changed',
      // percentage
      (snapshot) => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({percentage: percentage})
      },
      // err
      (err) => {
        console.error('upload error')
      },
      // complete
      () => {
        // FIXME: getDownloadURL is async
        console.log('upload success')
        console.log(file.name)
        storageRef.getDownloadURL().then(url => {
          this.setState({imageURL: url})
        })

      }
    )
  }

  handleStartTimeChange = (time) => {
    this.setState({startTime: time})
  }
  handleEndTimeChange = (time) => {
    this.setState({endTime: time})
  }

  render() {
    console.log(this.state)
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit}>
          <h3>Create New Event</h3>
          <h4>Info</h4>
          <Input type='text' onChange={this.handleChange} id='title' placeholder='Title'/>

          <div className={styles.Uploader}>
            <label className={styles.label} htmlFor="fileButton">File</label>
            <progress className={styles.Progress} value={this.state.percentage} max='100' id='uploader'>0%</progress>
            <input onChange={this.handleFileUpload} id="fileButton" type="file" />
          </div>

          <Input type='text' onChange={this.handleChange} id='location' placeholder='Location'/>

          <div className={styles.Time} >
            <label htmlFor="startTime">Starts</label>
            <DatePicker
              id='startTime'
              selected={this.state.startTime}
              onChange={this.handleStartTimeChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
              />
          </div>

          <div className={styles.Time} >
            <label htmlFor="endTime">Ends</label>
            <DatePicker
              id='endTime'
              selected={this.state.endTime}
              onChange={this.handleEndTimeChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
              />
          </div>


          <div className={styles.Type}>
            <label htmlFor="type">Event Type</label>
            <select onChange={this.handleChange} name='type' id='type'>
              <option value="lecture">Lecture</option>
              <option value="career">Career</option>
              <option value="party">Party</option>
            </select>
          </div>
          
          <div className={styles.Brief}>
            <label htmlFor="brief">Brief</label>
            <textarea onChange={this.handleChange} id="brief" placeholder='brief' />
          </div>

          <button>Create</button>
        </form>
      </div>
    )
  }
} 

// ! dispatch actions to props 
const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => dispatch(createEvent(event))
  }
}

export default connect(null, mapDispatchToProps)(CreateEvent);