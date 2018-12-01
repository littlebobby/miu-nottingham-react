import React, { Component } from 'react'
import styles from './CreateEvent.module.scss';
import { connect } from 'react-redux';
import { createEvent } from '../../../store/actions/eventActions'; //?
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <h3>Create New Event</h3>
        <h4>Info</h4>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="title">Title</label>
          <input className={styles.input} onChange={this.handleChange} id="title" type="text" placeholder='Event name' />
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="fileButton">File</label>
          <progress value={this.state.percentage} max='100' id='uploader'>0%</progress>
          <input onChange={this.handleFileUpload} id="fileButton" type="file" />
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="location">Location</label>
          <input className={styles.input} onChange={this.handleChange} id='location' type="text" placeholder='Location' />
        </div>


        <div >
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

        <div >
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



        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="type">Event Type</label>
          <select onChange={this.handleChange} name='type' id='type'>
            <option value="Lecture">Lecture</option>
            <option value="Career">Career</option>
            <option value="Party">Party</option>
          </select>
        </div>
        
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="brief">Brief</label>
          <textarea className={styles.input} onChange={this.handleChange} id="brief" placeholder='brief' />
        </div>

        

        
        <button>Create</button>
      </form>
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