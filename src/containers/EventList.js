import React, { Component } from 'react';
import EventBriefCard from '../components/event/event_brief_card/eventBriefCard';
import { connect } from 'react-redux'
import { likePlusOne } from '../store/actions'

import cssModules from './eventList.module.css'

class EventList extends Component {

  render() {
    console.log(this.props.events)
    return (
      <div className={cssModules.section}>
        {this.props.events.map(i => 
          <EventBriefCard 
            key={i.id} 
            data={i} 
            onLikeButtonClicked={() => this.props.likePlusOne(i.id)}
          />
        )}
        {/* <EventCard /> */}

      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {events: state.eventList}
}

const mapDispatchToProps = dispatch => {
  return {
    likePlusOne: (id) => dispatch(likePlusOne(id))
  }
}

// TODO: ? SHOULD i make past likePlusOne function here or in the eventBriefCard??
export default connect(mapStateToProps, mapDispatchToProps)(EventList)