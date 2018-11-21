import { EVENT_LIST, LIKE_PLUS_ONE } from '../actions';

const initState = {}

const eventReducer = (state=initState, action) => {
  switch(action.type) {
    case 'CREATE_EVENT':
      console.log('create project', action.event);
      return state
    case 'CREATE_EVENT_ERROR': 
      console.log('create action error', action.err)
      return state
    case LIKE_PLUS_ONE: 
      return state
    case 'LIKE_PLUS_ONE_ERROR': 
      console.log('like plus one error', action.err)
      return state
    case EVENT_LIST:
      return state
    // case LIKE_PLUS_ONE: 
    //   // ! FIXME: EFFICIENCY! its better to change this into an object, 
    //   // ! so dont have to interate through an array

    //   // !!! note!! never try to mutate the original state!
    //   // !! objects are reference types!!
    //   // !! {...obj} only do a shawllo copy
    //   // ? should i use lodash deepcopy()? cause json parse seems have some problems
    //   const result = JSON.parse(JSON.stringify(state))
    //   console.log('state', state)
    //   return result.map(i => {
    //     if(i.id === action.payload) {
    //       i.interaction.likes ++
    //     }
    //     return i
    //   })
    default:
      return state
  }
}

export default eventReducer