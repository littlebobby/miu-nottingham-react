import * as actionTypes from './actions';

const initialState = {
  count: 0
}

// ! is the state here global state or local????
const testReducer = (state = initialState, actions) => {
  switch(actions.type) {
    case actionTypes.PLUS_ONE: 
      return {count: state.count + 1}
    default:
      return state
  } 
}

export default testReducer;