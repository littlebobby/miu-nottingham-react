import React from 'react';
import PropTypes from 'prop-types';
import cssModules from './EventIcon.module.css'

const EventIcon = ({ symbolURL, number=0 }) => {
  return (
    <div className={cssModules.eventIcon}>
      <img className={cssModules.icon} alt='icon' src={symbolURL}/>
      {' '}
      <span className={cssModules.text}>{number}</span>
    </div>
  )
}

EventIcon.prototype = {
  symbolURL: PropTypes.string.isRequired
}
export default EventIcon
