import React, { Component } from 'react';
import EventBrief from '../components/event/event_brief/EventBrief';
import { connect } from 'react-redux'
// import { likePlusOne } from '../store/actions/eventActions'
import { likePlusOne } from '../store/actions/eventActions'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux' // to connect two hoc 
import cssModules from './EventList.module.css'

class EventList extends Component {
  render() {
    const {events} = this.props
    return (
      <div className={cssModules.section}>
      {/* ! by adding events && prevents empty events */}
        {events && events.map(i => 
            <EventBrief 
              key={i.id}
              data={i} 
              onLikeButtonClicked={() => this.props.likePlusOne(i.id)}
            />
        )}
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return { events: state.firestore.ordered.events }
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
    { collection: 'events' }
  ])
)(EventList)