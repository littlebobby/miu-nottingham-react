import React, { Component } from 'react';
import EventBriefCard from '../components/event/event_brief_card/EventBriefCard';
import { connect } from 'react-redux'
import { likePlusOne } from '../store/actions'

import cssModules from './EventList.module.css'

class EventList extends Component {

  render() {
    return (
      <div className={cssModules.section}>
        {this.props.eventList.map(i => 
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

const mapStateToProps = ({ eventList }) => {
  return {eventList}
}

const mapDispatchToProps = dispatch => {
  return {
    likePlusOne: (id) => dispatch(likePlusOne(id))
  }
}

// TODO: ? SHOULD i make past likePlusOne function here or in the eventBriefCard??
export default connect(mapStateToProps, mapDispatchToProps)(EventList)