import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux' // to connect two hoc 
import styles from './EventDetail.module.scss'


function EventDetail(props) {
  const { event } = props
  

  if (event) {
    console.log(props);
    return (
      <div className={styles.Container}>
        <section className={styles.Img}>
          <img src={props.event.info.imageURL} alt='event'/>
        </section>
        <section className={styles.Overview}>
          <h3>Overview</h3>
          <p>{props.event.info.brief}</p>
        </section>

        <section className={styles.Comments}>

        </section>
      </div>
    )
  } else {
    return (
      <div>
        <p>Loading event...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const events = state.firestore.data.events;
  const event = events ? events[id] : null
  return { 
    event,
    userId: state.firebase.auth.isEmpty ? null : state.firebase.auth.uid,
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'events' }
  ])
)(EventDetail)
