import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

function Nav(props) {
  const { auth, profile } = props
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link className={styles.a} to='/'>Logo</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Nav)
