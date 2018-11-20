import React, { Component } from 'react'
import styles from './CreateEvent.module.css'


class CreateEvent extends Component {
  state = {
    title: '',
    content: ''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }
  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }
  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <h5>Create New Event</h5>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="title">Title</label>
          <input className={styles.input} onChange={this.handleChange} id="title" type="text" placeholder='title' />
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="content">Content</label>
          <textarea className={styles.input} onChange={this.handleChange} id="content" placeholder='content' />
        </div>
        <button>Create</button>
      </form>
    )
  }
} 

export default CreateEvent;