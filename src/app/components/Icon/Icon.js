import React from 'react'
import styles from './Icon.module.scss'

export default function Icon(props) {
  return (
    <img classNa={styles.icon} src={props.src} alt={props.alt} />
  )
}
