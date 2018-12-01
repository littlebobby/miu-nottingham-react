import React, { Component } from 'react'
import JoinedUserGroup from '../JoinedUserGroup/JoinedUserGroup';
import cssModules from './EventBrief.module.css'
import likeSVG from 'assets/like.svg' // ?
import duckSVG from 'assets/duck.svg' 
import { Link } from 'react-router-dom';
import EventIconGroup from '../EventIconGroup/EventIconGroup';
import moment from 'moment'


export default class EventBrief extends Component {
  state = {
    liked: false
  }

  shouldComponentUpdate(nextProps) {
    // !! do not check if two objects are the same or not
    return this.props.data.interactions.likes !== nextProps.data.interactions.likes
  }
  render() {
    const { title, location, time, imageURL, startTime, endTime} = this.props.data.info
    const btnBgColor = [cssModules.likeBtn]
    // object 
    const { likes } = this.props.data
    // console.log(likes)
    const { userId } = this.props
    // console.log(userId)
    if (userId) {
      if (likes && likes.hasOwnProperty(userId)) btnBgColor.push(cssModules.likedBtn)
    }
    return (
      <div className={cssModules.container}>
        <div className={cssModules.card}>
          <div className={cssModules.likeBtnBox}>
            <button className={btnBgColor.join(' ')} onClick={this.props.onLikeButtonClicked}>
              <img alt='like' className={cssModules.likeSVG} src={likeSVG} />
            </button>
          </div>

          <div className={cssModules.imgBox}>
            <Link to={`/event/${this.props.data.id}`}>
              <img className={cssModules.img} alt='event' src={imageURL}></img>
            </Link>
          </div>

          <div className={cssModules.timeBox}>
          {/* FIXME: calc time from startTime & delete and reinsert document in firestore */}
          {time ? <span className={cssModules.timeText}>{time}</span> 
          : 
          <span className={cssModules.timeText}>{moment(startTime.toDate().toString()).format("MMM Do")}</span> 
          
          }
            
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
