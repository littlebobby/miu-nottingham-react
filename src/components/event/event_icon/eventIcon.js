import React from 'react';
import PropTypes from 'prop-types';
// import icon_heart from '../../../assets/heart.svg'


const EventIcon = ({ symbolURL, number=0 }) => {
  return (
    <div style={{height: '20px'}}>
      <img alt='icon' height='100%' src={symbolURL}/>
      {' '}
      <span>{number}</span>
    </div>
  )
}

EventIcon.prototype = {
  symbolURL: PropTypes.string.isRequired
}
export default EventIcon
