import React from 'react'
import EventIcon from '../event/event_icon/eventIcon';

import icon_heart from '../../assets/heart.svg'
import icon_comment from '../../assets/comment.svg'
import icon_duck from '../../assets/duck.svg'
const EventIconGroup = ({ interaction }) => {
  const { likes, ducks, comments } = interaction
  return (
    <div>
      <EventIcon symbolURL={icon_heart} number={likes}/>
      <EventIcon symbolURL={icon_comment} number={comments} />
      <EventIcon symbolURL={icon_duck} number={ducks}/>
    </div>
  )
}

export default EventIconGroup