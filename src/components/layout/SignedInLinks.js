import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.css';


export default function SignedInLinks() {
  return (
    <ul className={styles.ul}>
      <li><NavLink className={styles.a} to='/create'>New Project</NavLink></li>
      <li><NavLink className={styles.a} to='/'>Log Out</NavLink></li>
      <li><NavLink className={styles.a} to='/'>NNN</NavLink></li>
    </ul>
  )
}
