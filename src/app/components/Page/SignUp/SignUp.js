import React, { Component } from 'react'
import styles from './SignUp.module.scss'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../../store/actions/authActions' //?
import videomp4 from '../../../assets/videos/bgvideo.mp4';
import videowebm from '../../../assets/videos/bgvideo.webm';
import { Input } from 'components';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
  }
  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }
  render() {
    const { authError, auth } = this.props
    if (auth.uid) return <Redirect to='/' />

    return (
      <div className={styles.Container}>
        <div className={styles.Video}>
          <video autoPlay muted loop>
            <source src={videomp4} type="video/mp4" />>
            <source src={videowebm} type="video/webm" />>
              Your brower is not supported 
          </video>
        </div>
       
        <form className={styles.Form} onSubmit={this.handleSubmit}>
          <h5>Sign Up</h5>
          <Input type='email' onChange={this.handleChange} id='email' placeholder='Email'/>
          <Input type='password' onChange={this.handleChange} id='password' placeholder='Password' />
          <Input type='text' onChange={this.handleChange} id='firstName' placeholder='First name' />
          <Input type='text' onChange={this.handleChange} id='lastName' placeholder='Last name' />
        <div className={styles.error}>
          {authError ? <p>{authError}</p> : null}
        </div>
          
          <button>Sign up</button>
         
        </form>
      </div>
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
