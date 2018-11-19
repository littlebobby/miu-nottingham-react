import React from 'react'
import EventIcon from '../event/event_icon/eventIcon';

import icon_views from '../../assets/views.svg'
import icon_comments from '../../assets/comments.svg'
import icon_likes from '../../assets/likes.svg'
import cssModules from './eventIconGroup.module.css'

const EventIconGroup = ({ interaction }) => {
  const { likes, ducks, comments } = interaction
  return (
    <div className={cssModules.iconBox}>
      <EventIcon symbolURL={icon_views} number={likes}/>
      <EventIcon symbolURL={icon_comments} number={comments} />
      <EventIcon symbolURL={icon_likes} number={ducks}/>
    </div>
  )
}

export default EventIconGroup