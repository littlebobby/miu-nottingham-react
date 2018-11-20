import React from 'react'
import EventIcon from '../event/event_icon/EventIcon';

import icon_views from '../../assets/views.svg'
import icon_comments from '../../assets/comments.svg'
import icon_likes from '../../assets/likes.svg'
import cssModules from './EventIconGroup.module.css'

const EventIconGroup = ({ interaction }) => {
  // TODO: only update the like number not the whole IconGroup
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