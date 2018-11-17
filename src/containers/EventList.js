import React, { Component } from 'react';
import EventBriefCard from '../components/event/event_brief_card/eventBriefCard';
import { connect } from 'react-redux'

class EventList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.events)
    return (
      <div>
        {this.props.events.map(i => <EventBriefCard key={i.id} data={i}/>)}
        {/* <EventCard /> */}

      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {events: state.eventList}
}

export default connect(mapStateToProps, null)(EventList)