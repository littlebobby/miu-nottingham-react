import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link className={styles.a} to='/'>Logo</Link>
        {/* <SignedInLinks /> */}
        <SignedOutLinks />
      </div>
    </nav>
  )
}
