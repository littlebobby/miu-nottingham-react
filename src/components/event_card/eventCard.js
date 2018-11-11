import React, { Component } from 'react'
import {images as imagesData} from '../../data/data_images'

export default class EventCard extends Component {
  render() {
    return (
      <div>
        <div>
          <img height='100px' src={imagesData[0]}></img>
        </div>
        <hr />
        <div>
          <p>SCDA</p>
          <p>16 Nov -> 18 Nov</p>
        </div>
        <hr />
        <div>
          <button>Going?</button>
          <button>More info</button>
        </div>
      </div>
    )
  }
}
