import React, { Component } from 'react'
import EventIconGroup from '../../event_icon_group/eventIconGroup';
import JoinedUserGroup from '../joined_user_group/joinedUserGroup'

export default class EventBriefCard extends Component {

  shouldComponentUpdate(nextProps) {
    // !! do not check if two objects are the same or not
    return this.props.data.interaction.likes !== nextProps.data.interaction.likes
  }
  render() {
    console.log('event card UPDATED')
    const { title, location, time, imageURL} = this.props.data.info
    return (
      <div style={{border: '1px solid green', margin: '10px'}}>
        <div>
          <button onClick={this.props.onLikeButtonClicked}>Like?</button>
        </div>
        <div>
          <img alt='event' height='100px' src={imageURL}></img>
        </div>
        <div>
          <span>{title}</span>
          {' '}
          <span>{time}</span>
          {' '}
          <span>{location}</span>
        </div>
        <div>
          <button>Going?</button>
        </div>
        <EventIconGroup interaction={this.props.data.interaction}/>
        <JoinedUserGroup />
      </div>
    )
  }
}
