import React, { Component } from 'react'
import styles from './CreateEvent.module.css';
import { connect } from 'react-redux';
import { createEvent } from '../../../store/actions/eventActions'; //?

import firebase from '../../../../config/fbConfig'


class CreateEvent extends Component {
  state = {
    title: '',
    brief: '',
    type: '',
    imageURL: '',
    location: '',
    fileName: '',

    percentage: 0,
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
        console.log('upload success')
        console.log(file.name)
        this.setState({fileName: file.name})
      }
    )
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <h3>Create New Event</h3>
        <h4>Info</h4>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="title">Title</label>
          <input className={styles.input} onChange={this.handleChange} id="title" type="text" placeholder='title' />
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="imgURL">img URL</label>
          <input className={styles.input} onChange={this.handleChange} id='imgURL' type="text" placeholder='imgURL' />
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="location">Location</label>
          <input className={styles.input} onChange={this.handleChange} id='location' type="text" placeholder='location' />
        </div>

          {/* FIXME: this should be fixed to time */}
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="time">Location</label>
          <input className={styles.input} onChange={this.handleChange} id='time' type="text" placeholder='time' />
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="type">Event Type</label>
          <select name='type' id='type'>
            <option value="Lecture">Lecture</option>
            <option value="Career">Career</option>
            <option value="Party">Party</option>
          </select>
        </div>
        
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="brief">Brief</label>
          <textarea className={styles.input} onChange={this.handleChange} id="brief" placeholder='brief' />
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="fileButton">File</label>
          <progress value={this.state.percentage} max='100' id='uploader'>0%</progress>
          <input onChange={this.handleFileUpload} id="fileButton" type="file" />
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