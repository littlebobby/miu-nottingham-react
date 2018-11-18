import React from 'react'
import userData from '../../../data/user'

export default function JoinedUserGroup() {
  console.log(userData)
  return (
    <div>
      {userData.map(i => <img key={i.id} src={`${i.picture}`} /> )}
    </div>
  )
}
