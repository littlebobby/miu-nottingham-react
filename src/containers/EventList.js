import React, { Component } from 'react';
import EventBriefCard from '../components/event/event_brief_card/EventBriefCard';
import { connect } from 'react-redux'
import { likePlusOne } from '../store/actions'

import cssModules from './EventList.module.css'

class EventList extends Component {

  render() {
    const {events} = this.props
    return (
      <div className={cssModules.section}>
      {/* ! by adding events && prevents empty events */}
        {events && events.map(i => 
          <EventBriefCard 
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
  console.log(state.event);
  return {events: state.event}
}

const mapDispatchToProps = dispatch => {
  return {
    likePlusOne: (id) => dispatch(likePlusOne(id))
  }
}

// TODO: ? SHOULD i make past likePlusOne function here or in the eventBriefCard??
export default connect(mapStateToProps, mapDispatchToProps)(EventList)