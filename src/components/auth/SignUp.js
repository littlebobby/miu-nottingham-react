import React, { Component } from 'react'
import styles from './SignUp.module.css'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
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
        <h5>Sign Up</h5>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input className={styles.input} onChange={this.handleChange} id="email" type="email" placeholder='Email' />
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="password">Password</label>
          <input className={styles.input} onChange={this.handleChange} id="password" type="password" placeholder='Password' />
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="lastName">Last Name</label>
          <input className={styles.input} onChange={this.handleChange} id="lastName" type="text" placeholder='Last Name' />
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="firstName">First Name</label>
          <input className={styles.input} onChange={this.handleChange} id="firstName" type="text" placeholder='First Name' />
        </div>
        <button>Sign up</button>
      </form>
    )
  }
} 

export default SignUp;
