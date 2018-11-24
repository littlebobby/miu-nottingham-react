import React from 'react'
import styles from './Switcher.module.css'
import { connect } from 'react-redux'
import { updateEventType } from '../../store/actions/eventTypeActions'

function Switcher(props) {
  console.log(props.eventType)

  // todo use state to determine whether to 
  return (
    <div className={styles.container} >
      <span onClick={(e) => props.updateType('all')} className={styles.item}>All</span>
      <span onClick={() => props.updateType('party')} className={styles.item}>Party</span>
      <span onClick={() => props.updateType('lecture')} className={styles.item}>Lecture</span>
      <span onClick={() => props.updateType('career')} className={styles.item}>Career</span>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    eventType: state.eventype
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateType: (eventType) => dispatch(updateEventType(eventType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Switcher)