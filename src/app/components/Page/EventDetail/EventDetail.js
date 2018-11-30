import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux' // to connect two hoc 
import styles from './EventDetail.module.scss'
import { Icon } from 'components'
import duck_svg from 'assets/duck.svg';
import { Comment, JoinedUserGroup } from 'components'

// ? should the 'read more' display directly after overview


function EventDetail(props) {
  const { event } = props
  

  if (event) {
    console.log(props);
    return (
      <div className={styles.Container}>

        <section className={styles.Img}>
          <div className={styles.heading}>
            <p>{props.event.info.title}</p>
          </div>
          <div className={styles.imageBox}>
            <img src={props.event.info.imageURL} alt='event'/>
          </div>
         
          <button>
            <Icon src={duck_svg} alt='duck'/>
          </button>
          <div className={styles.Host}>
            <div></div>
            <p>Hosted by</p>
            <span>
              <a href='#'>{props.event.authorFirstName}</a>
            </span>
          </div>
        </section>
        <section className={styles.Info}>
          <h6>Dec 26</h6>
          <div className={styles.InfoRightBox}>
            <div>
              <span>14:00 - 16:00</span>
              <div className={styles.Divider}></div>
              <span>TB 226</span>
            </div>
            <div>
              <a href='#'>Add to Calendar</a>
            </div>
          </div>
        </section>

        <section className={styles.Overview}>
          <h3>Overview</h3>
          <p>{props.event.info.brief}</p>
          <a href='#'>Read more</a>
        </section>

        <section className={styles.Going}>
          <h3>3 Going</h3>
          <JoinedUserGroup joinedUsers={props.event.joinedUsers}/>
        </section>


        <section className={styles.Comments}>
          <h3>Comments</h3>
          <Comment />
        </section>
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
