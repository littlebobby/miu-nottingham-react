import React, { Component } from 'react'
import styles from './SignIn.module.scss'
import { connect } from 'react-redux'
import { signIn } from '../../../store/actions/authActions' //?
import { Redirect } from 'react-router-dom';
import { Input } from 'components'


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
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit}>
          <h5>Sign In</h5>
          <Input type='email' onChange={this.handleChange} id='email' placeholder='Email'/>
          <Input type='password' onChange={this.handleChange} id='password' placeholder='Password' />
          <button>Login</button>
          <div>
            { authError ? <p>{authError}</p> : null}
          </div>
        </form>
      </div>
      
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
