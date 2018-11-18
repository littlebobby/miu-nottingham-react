import React from 'react'
import userData from '../../../data/user'

export default function JoinedUserGroup({ joinedUsers }) {
  console.log(userData)
  return (
    <div>
      {joinedUsers.map(i => {
        console.log(i);
        return <img key={userData[i-1].id} src={userData[i-1].picture} />
      })}
    </div>
  )
}
