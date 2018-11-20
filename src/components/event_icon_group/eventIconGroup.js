import React from 'react'
import EventIcon from '../event/event_icon/eventIcon';

import icon_views from '../../assets/views.svg'
import icon_comments from '../../assets/comments.svg'
import icon_likes from '../../assets/likes.svg'
import cssModules from './eventIconGroup.module.css'

const EventIconGroup = ({ interaction }) => {
  const { views, comments, likes } = interaction
  return (
    <div className={cssModules.iconBox}>
      <EventIcon symbolURL={icon_views} number={views}/>
      <EventIcon symbolURL={icon_comments} number={comments} />
      <EventIcon symbolURL={icon_likes} number={likes}/>
    </div>
  )
}

export default EventIconGroup