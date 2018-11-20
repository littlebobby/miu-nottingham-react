import { EVENT_LIST, LIKE_PLUS_ONE } from '../actions';
import { eventsData } from '../data/data'

// ! reference 
const initState = eventsData

const eventReducer = (state=initState, actions) => {
  switch(actions.type) {
    case EVENT_LIST:
      return state
    case LIKE_PLUS_ONE: 
      // ! FIXME: EFFICIENCY! its better to change this into an object, 
      // ! so dont have to interate through an array

      // !!! note!! never try to mutate the original state!
      // !! objects are reference types!!
      // !! {...obj} only do a shawllo copy
      // ? should i use lodash deepcopy()? cause json parse seems have some problems
      const result = JSON.parse(JSON.stringify(state))
      console.log('state', state)
      return result.map(i => {
        if(i.id === actions.payload) {
          i.interaction.likes ++
        }
        return i
      })
    default:
      return state
  }
}

export default eventReducer