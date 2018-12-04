import React, { Component } from 'react'
import styles from './Switcher.module.scss'
import { connect } from 'react-redux'
import { updateEventType } from '../../store/actions/eventTypeActions'

const Switcher = (props) => { 
    console.log(props.eventType)
    return (

      <div className={styles.container} >
        <div onClick={() => props.updateType('all')} className={props.eventType === 'all' ? styles.Highlighted : ''}><span>All</span></div>
        <div onClick={() => props.updateType('party')} className={props.eventType === 'party' ? styles.Highlighted : ''}><span>Party</span></div>
        <div onClick={() => props.updateType('lecture')} className={props.eventType === 'lecture' ? styles.Highlighted : ''}><span>Lecture</span></div>
        <div onClick={() => props.updateType('career')} className={props.eventType === 'career' ? styles.Highlighted : ''}><span>Career</span></div>
      </div>
    )
  
}

const mapStateToProps = state => {
  return {
    eventType: state.eventType
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateType: (eventType) => dispatch(updateEventType(eventType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Switcher)