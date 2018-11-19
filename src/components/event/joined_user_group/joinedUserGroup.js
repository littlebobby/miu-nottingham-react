import React from 'react'
import userData from '../../../data/user'
import cssModules from './joinedUserGroup.module.css';

export default function JoinedUserGroup({ joinedUsers }) {
  console.log(userData)
  return (
    <div className={cssModules.clearFix}>
      {joinedUsers.map(i => {
        console.log(i);
        return <img className={cssModules.img} key={userData[i-1].id} src={userData[i-1].picture} />
      })}
    </div>
  )
}
