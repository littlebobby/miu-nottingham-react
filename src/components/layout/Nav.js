import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

function Nav(props) {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link className={styles.a} to='/'>Logo</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    state: state
  }
}

export default connect(mapStateToProps)(Nav)
