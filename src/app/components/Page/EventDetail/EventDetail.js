import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux' // to connect two hoc 
import moment from 'moment'
import styles from './EventDetail.module.css'
import { Link } from 'react-router-dom';
import arrow_left from '../../../assets/arrow_left.svg'
import likeSVG from '../../../assets/like.svg'


function EventDetail(props) {
  const { event } = props

  // const btnBgColor = [cssModules.likeBtn]
    // object 
  // const { likes } = this.props.data
  
  if (event) {
    console.log(props)
    console.log(event)
    console.log(props.userId);
    return (
      <div className={styles.container}>
      <Link to='/'>
        <img className={styles.backBtn} alt='back' src={arrow_left}></img>
      </Link>

      <div className={styles.likeBtnBox}>
        {/* <button className={btnBgColor.join(' ')} onClick={this.props.onLikeButtonClicked}> */}
          <img alt='like' className={styles.likeSVG} src={likeSVG} />
        {/* </button> */}
      </div>

        <div className={styles.imageBox}>
          <img alt='event' className={styles.image} src={event.info.imageURL}></img>
        </div>

        <div className={styles.titleBox}>
          <img alt='event' className={styles.image2} src={event.info.imageURL}></img>

          <h3 className={styles.title}>{event.info.title}</h3>
        </div>

        <div>
          <span>{event.info.title}</span>
          <p>{event.info.brief}
          </p>
          {event.createdAt ? <p>{moment(event.createdAt.toDate().toString()).calendar()}</p> : null}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <p>Loading event...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const events = state.firestore.data.events;
  const event = events ? events[id] : null
  // console.log('which event has like',event);
  // FIXME: right now does not correctly display liked button
  return { 
    event,
    userId: state.firebase.auth.isEmpty ? null : state.firebase.auth.uid,
    
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'events' }
  ])
)(EventDetail)
