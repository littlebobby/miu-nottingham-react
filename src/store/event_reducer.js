import { EVENT_LIST } from './actions';
import { eventsData as initialState } from '../data/data'

const eventReducer = (state=initialState, actions) => {
  switch(actions.type) {
    case EVENT_LIST:
      return state
    default:
      return state
  }
}

export default eventReducer