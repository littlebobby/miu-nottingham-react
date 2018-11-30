import React from 'react';
import PropTypes from 'prop-types';
import cssModules from './EventIcon.module.scss'
import { Icon }from 'components';

const EventIcon = ({ symbolURL, number=0 }) => {
  return (
    <div className={cssModules.EventIcon}>
      <Icon alt='icon' src={symbolURL}></Icon>
      {' '}
      <span>{number}</span>
    </div>
  )
}

EventIcon.prototype = {
  symbolURL: PropTypes.string.isRequired
}
export default EventIcon
