import React from 'react'

import EventIcon from './EventIcon/EventIcon'
import icon_views from 'assets/views.svg'
import icon_comments from 'assets/comments.svg'
import icon_likes from 'assets/likes.svg'
import styles from './EventIconGroup.module.scss'

const EventIconGroup = ({ interactions }) => {
  // TODO: only update the like number not the whole IconGroup
  const { views, comments, likes } = interactions
  return (
    <div className={styles.IconBox}>
      <EventIcon symbolURL={icon_views} number={views}/>
      <EventIcon symbolURL={icon_comments} number={comments} />
      <EventIcon symbolURL={icon_likes} number={likes}/>
    </div>
  )
}

export default EventIconGroup