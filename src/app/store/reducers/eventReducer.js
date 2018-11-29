import {
  EVENT_LIST,
  LIKE_PLUS_ONE
} from '../actions';

const initState = {}

const eventReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      console.log('create project', action.event);
      return state
    case 'CREATE_EVENT_ERROR':
      console.log('create action error', action.err)
      return state
    case LIKE_PLUS_ONE:
      console.log('event reducer')
      return {...state, hi: 'hello'}
    case 'LIKE_PLUS_ONE_ERROR':
      console.log('like plus one error', action.err)
      return state
    case EVENT_LIST:
      return state
    default:
      return state
  }
}

export default eventReducer