import React, { Component } from 'react';
import EventBriefCard from '../components/event/event_brief_card/eventBriefCard';
import { connect } from 'react-redux'
import { likePlusOne } from '../store/actions'

class EventList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.events)
    return (
      <div>
        {this.props.events.map(i => <EventBriefCard key={i.id} data={i} onLikeButtonClicked={() => this.props.likePlusOne(i.id)}/>)}
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


export default connect(mapStateToProps, mapDispatchToProps)(EventList)