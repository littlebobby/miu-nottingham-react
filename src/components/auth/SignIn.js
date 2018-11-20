import React, { Component } from 'react'
import styles from './SignIn.module.css'


// const onSubmit = values => {
//   console.log(values);
//   alert(JSON.stringify(values))

// }

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }
  handleChange = (e) => {
    // ! nive workround
    this.setState({[e.target.id]: e.target.value})
  }
  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <h5>Sign In</h5>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input className={styles.input} onChange={this.handleChange} id="email" type="email" placeholder='Email' />
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="password">Password</label>
          <input className={styles.input} onChange={this.handleChange} id="password" type="password" placeholder='Password' />
        </div>
        <button>Login</button>
      </form>
    )
  }
} 

export default SignIn;
