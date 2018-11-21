import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux' // to connect two hoc 
import moment from 'moment'

function EventDetail(props) {
  const { event } = props
  
  if (event) {
    console.log(event)
    return (
      <div>
        <div>
          <span>{event.info.title}</span>
          <p>{event.info.brief}
          </p>
          {event.createdAt ? <p>{moment(event.createdAt.toDate().toString()).calendar()}</p> : null}
        </div>
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
    event
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'events' }
  ])
)(EventDetail)
