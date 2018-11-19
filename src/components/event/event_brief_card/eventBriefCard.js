import React, { Component } from 'react'
import EventIconGroup from '../../event_icon_group/eventIconGroup';
import JoinedUserGroup from '../joined_user_group/joinedUserGroup';
import cssModules from './eventBriefCard.module.css'
import likeSVG from '../../../assets/like.svg'
import duckSVG from '../../../assets/duck.svg'

export default class EventBriefCard extends Component {

  shouldComponentUpdate(nextProps) {
    // !! do not check if two objects are the same or not
    return this.props.data.interaction.likes !== nextProps.data.interaction.likes
  }
  render() {
    console.log('event card UPDATED')
    const { title, location, time, imageURL} = this.props.data.info
    return (
      <div className={cssModules.container}>
        <div className={cssModules.card}>
          <div className={cssModules.likeBtnBox}>
            <button className={cssModules.likeBtn} onClick={this.props.onLikeButtonClicked}>
              <img className={cssModules.likeSVG} src={likeSVG} />
            </button>
          </div>

          <div className={cssModules.imgBox}>
            <img className={cssModules.img} alt='event' src={imageURL}></img>
          </div>

          <div className={cssModules.timeBox}>
            <span className={cssModules.timeText}>{time}</span>
          </div>

          <div className={cssModules.titleBox}>
            <span className={cssModules.title}>{title}</span>
            {/* <span>{location}</span> */}
          </div>
          <EventIconGroup interaction={this.props.data.interaction}/>
          <div className={cssModules.goingBox}>
            <button className={cssModules.goingBtn}>
              <img src={duckSVG} alt='going' />
            </button>
          </div>
         
        </div>
        <JoinedUserGroup joinedUsers={this.props.data.joinedUsers}/>
      </div>
    )
  }
}
