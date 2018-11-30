import React from 'react'
import styles from './Icon.module.scss'

export default function Icon(props) {
  return (
    <img className={styles.icon} src={props.src} alt={props.alt} />
  )
}
