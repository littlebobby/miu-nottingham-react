import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import logo_svg from '../../assets/logo.svg'

function Nav(props) {
  const { auth, profile } = props
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to='/'><img style={{height: '60%', paddingTop: '10px', paddingLeft: '10px'}} src={logo_svg} alt='logo' /></Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Nav)
