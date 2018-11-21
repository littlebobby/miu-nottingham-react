import React from 'react'
import moment from 'moment'

export default function Notification(props) {
  const { notifications } = props;
  return (
    <div style={{clear: 'both', color: 'white'}}>
      <h3>notification</h3>
      <ul>
        {notifications && notifications.map(i => {
          return (
            <li key={i.id}>
              <span>{i.user}</span>
              <span>{i.content}</span>
              <div>
                {moment(i.time.toDate()).fromNow()}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
