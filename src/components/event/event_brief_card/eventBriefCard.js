import React, { Component } from 'react'
import EventIconGroup from '../../event_icon_group/eventIconGroup';
import JoinedUserGroup from '../joined_user_group/joinedUserGroup';
import cssModules from './eventBriefCard.module.css'
import likeSVG from '../../../assets/like.svg'

export default class EventBriefCard extends Component {

  shouldComponentUpdate(nextProps) {
    // !! do not check if two objects are the same or not
    return this.props.data.interaction.likes !== nextProps.data.interaction.likes
  }
  render() {
    console.log('event card UPDATED')
    const { title, location, time, imageURL} = this.props.data.info
    return (
      <div className={cssModules.card}>
        <div className={cssModules.btnLikeBox}>
          <button className={cssModules.btnLike} onClick={this.props.onLikeButtonClicked}>
            <img className={cssModules.likeSVG} src={likeSVG} />
          </button>
        </div>

        <div className={cssModules.imgBox}>
          <img className={cssModules.img} alt='event' src={imageURL}></img>
        </div>

        <div className={cssModules.timeBox}>
          <span className={cssModules.timeText}>{time}</span>
        </div>

        <div>
          <span>{title}</span>
          {' '}
          <span>{location}</span>
        </div>
        <div>
          <button>Going?</button>
        </div>
        <EventIconGroup interaction={this.props.data.interaction}/>
        <JoinedUserGroup joinedUsers={this.props.data.joinedUsers}/>
      </div>
    )
  }
}
