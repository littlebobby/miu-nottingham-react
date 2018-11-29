import React from 'react'
import userData from '../../../data/user'
import cssModules from './JoinedUserGroup.module.css';

export default function JoinedUserGroup({ joinedUsers }) {
  return (
    <div className={cssModules.clearFix}>
      {joinedUsers.map(i => {
        return <img className={cssModules.img} key={userData[i-1].id} src={userData[i-1].picture} />
      })}
    </div>
  )
}
