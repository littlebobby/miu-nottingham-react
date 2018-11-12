import React, { Component } from 'react'
import EventBriefCard from '../components/event/event_brief_card/eventBriefCard'

import { event as eventData } from '../data/data'
export default class EventList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <div>
        {eventData.map(i => <EventBriefCard key={i.id} data={i}/>)}
        {/* <EventCard /> */}

      </div>
    )
  }
}
