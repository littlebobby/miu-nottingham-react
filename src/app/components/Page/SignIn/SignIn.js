import React, { Component } from 'react'
import styles from './SignIn.module.css'
import { connect } from 'react-redux'
// import { signIn } from '../../store/actions/authActions'
import { signIn } from '../../../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

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
    this.props.signIn(this.state)
  }
  handleChange = (e) => {
    // ! nive workround
    this.setState({[e.target.id]: e.target.value})
  }
  render() {
    const { authError, auth } = this.props
    if (auth.uid) return <Redirect to='/' />
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
        <div>
          { authError ? <p>{authError}</p> : null}
        </div>
      </form>
    )
  }
} 

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
