import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.css';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'



function SignedInLinks(props) {
  return (
    <ul className={styles.ul}>
      <li><NavLink className={styles.a} to='/create'>New Project</NavLink></li>
      <li><a onClick={props.signOut} className={styles.a}>Log Out</a></li>
      <li><NavLink className={styles.profile} to='/'>{props.profile.initials}</NavLink></li>
    </ul>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
