import React from 'react'

export default function EventDetail(props) {
  // fetch the event id
  const id = props.match.params.id
  return (
    <div>
      <div>
        <span>Event Title - {id}</span>
        <p>Lorem ashdofasdfoawenfoaweifhoa
        </p>
      </div>
    </div>
  )
}
