import React, { Component } from 'react'
import styles from './SignUp.module.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import { signUp } from '../../../../store/actions/authActions' //!
import { signUp } from '../../../store/actions/authActions' //?
class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state)
    this.props.signUp(this.state)
  }
  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }
  render() {
    const { authError, auth } = this.props
    if (auth.uid) return <Redirect to='/' />

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
        <div>
          {authError ? <p>{authError}</p> : null}
        </div>
      </form>
    )
  }
} 

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
