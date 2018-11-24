import React, { Component } from 'react'
import styles from './CreateEvent.module.css';
import { connect } from 'react-redux';
import { createEvent } from '../../store/actions/eventActions';


class CreateEvent extends Component {
  state = {
    title: '',
    content: ''
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
          <label className={styles.label} htmlFor="type">Location</label>
          <select name='type'>
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