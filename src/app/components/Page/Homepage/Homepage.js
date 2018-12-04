import React from 'react';
// import Switcher from '../switcher/Switcher'
import {EventListContainer, Switcher, Slideshow } from 'components';


export default function Homepage(props) {
  return (
    <div>
      <div style={{fontSize: '30px', fontWeight: 'bold', background: 'black', color: 'white', padding: '10px 0 0 30px'}}>
          Discover
      </div>
      <Slideshow />
      <Switcher />
      <EventListContainer />
    </div>
  )
}