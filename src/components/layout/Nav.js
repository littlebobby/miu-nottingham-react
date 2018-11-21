import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

function Nav(props) {
  const { auth } = props
  console.log(auth)
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
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
  console.log(state)
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Nav)
