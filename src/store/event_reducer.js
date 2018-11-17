import { EVENT_LIST, LIKE_PLUS_ONE } from './actions';
import { eventsData as initialState } from '../data/data'

const eventReducer = (state=initialState, actions) => {
  switch(actions.type) {
    case EVENT_LIST:
      return state
    case LIKE_PLUS_ONE: 
      console.log(actions.payload)
      // ! FIXME: EFFICIENCY! its better to change this into an object, 
      // ! so dont have to interate through an array
      const result = state.map(i => {
        if(i.id === actions.payload) {
          i.interaction.likes ++
        }
        return i
      })
      // const result = [...state, {hi: 'hi'}]
      return result
    default:
      return state
  }
}

export default eventReducer