
const initState = 'all'

const eventTypeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_EVENT_TYPE':
      console.log('update event type', action.eventType);
      return action.eventType
    default:
      return state
  }
}

export default eventTypeReducer