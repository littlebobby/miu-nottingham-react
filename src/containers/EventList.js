import React, { Component } from 'react'
import EventCard from '../components/event_card/eventCard';

export default class EventList extends Component {
  render() {
    return (
      <div>
        <EventCard />
        <EventCard />

      </div>
    )
  }
}
