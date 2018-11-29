import React, { Component } from 'react';
import EventBrief from './EventBrief/EventBrief';
import { connect } from 'react-redux'
// import { likePlusOne } from '../store/actions/eventActions'
// import { likePlusOne } from '../../../store/actions/eventActions' // !
import { likePlusOne } from '../../store/actions/eventActions' // ?
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux' // to connect two hoc 
import cssModules from './EventListContainer.module.css'
// import Notification from '../components/notifications/Notification'

class EventList extends Component {
  render() {
    const {events} = this.props
    return (
      <div className={cssModules.section}>
      {/* ! by adding events && prevents empty events */}
        {events && events.map(i => {
            console.log(i)
            
            return this.props.eventType === i.type || this.props.eventType === 'all' ? 
             (
              <EventBrief 
                key={i.id}
                data={i} 
                userId = {this.props.userId}
                onLikeButtonClicked={() => this.props.likePlusOne(i.id)}
              />
            )
            : null
        }
            
        )}
        {/* <Notification notifications={this.props.notifications}/> */}
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return { 
    events: state.firestore.ordered.events,
    // notifications: state.firestore.ordered.notifications,
    userId: state.firebase.auth.isEmpty ? null : state.firebase.auth.uid,
    eventType: state.eventType
   }
}

const mapDispatchToProps = dispatch => {
  return {
    likePlusOne: (id) => dispatch(likePlusOne(id))
  }
}

// TODO: ? SHOULD i make past likePlusOne function here or in the eventBriefCard??
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'events', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
  ])
)(EventList)