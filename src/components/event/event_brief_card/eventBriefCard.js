import React, { Component } from 'react'
import {images as imagesData} from '../../../data/data'
import EventIconGroup from '../../event_icon_group/eventIconGroup';

export default class EventBriefCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.data)
    const { title, location, time, imageURL} = this.props.data.info
    return (
      <div style={{border: '1px solid green', margin: '10px'}}>
        <div>
          <img height='100px' src={imageURL}></img>
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
      </div>
    )
  }
}
