import React, { Component } from 'react'
import EventIconGroup from '../../event_icon_group/EventIconGroup';
import JoinedUserGroup from '../joined_user_group/JoinedUserGroup';
import cssModules from './EventBriefCard.module.css'
import likeSVG from '../../../assets/like.svg'
import duckSVG from '../../../assets/duck.svg'
import { Link } from 'react-router-dom';

export default class EventBriefCard extends Component {
  shouldComponentUpdate(nextProps) {
    // !! do not check if two objects are the same or not
    return this.props.data.interactions.likes !== nextProps.data.interactions.likes
  }
  render() {
    console.log(this.props.data.info)
    const { title, location, time, imageURL} = this.props.data.info
    return (
      <div className={cssModules.container}>
        <div className={cssModules.card}>
          <div className={cssModules.likeBtnBox}>
            <button className={cssModules.likeBtn} onClick={this.props.onLikeButtonClicked}>
              <img alt='like' className={cssModules.likeSVG} src={likeSVG} />
            </button>
          </div>

          <div className={cssModules.imgBox}>
            <Link to={`/event/${this.props.data.id}`}>
              <img className={cssModules.img} alt='event' src={imageURL}></img>
            </Link>
          </div>

          <div className={cssModules.timeBox}>
            <span className={cssModules.timeText}>{time}</span>
          </div>

          <div className={cssModules.titleBox}>
            <span className={cssModules.title}>{title}</span>
            {/* <span>{location}</span> */}
          </div>
          <EventIconGroup interactions={this.props.data.interactions}/>
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
