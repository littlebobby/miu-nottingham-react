import React from 'react'
import upvote_svg from '../../assets/upvote.svg'
import sherene_png from '../../assets/hosts/sherene.jpeg'
import styles from './Comment.module.scss'

const Comment = (props) => {
  return (
    <div className={styles.Container}>
      <img src={sherene_png}></img>
      <div className={styles.PostInfo}>
        <div>
          <h6>Sherene</h6>
          <div className={styles.divider}>&bull;</div>
          <span className={styles.time}>7 hours ago</span>
          {/* ! the sequence of upvoteicon and upvotenumber matters */}
          <div className={styles.upvoteIcon}> 
            <img alt='upvote' src={upvote_svg}></img>
          </div>
          <span className={styles.upvoteNumber}>5</span>
        </div>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </div>
    </div>
  )
}

export default Comment