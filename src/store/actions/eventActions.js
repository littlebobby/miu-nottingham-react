import { LIKE_PLUS_ONE } from "../actions";

// pasuing the dispatch and make some async call 
// after we have done that -> then we can carry on with the dispatch
export const createEvent = event => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// make async call to database
		dispatch({ type: 'CREATE_EVENT', event: event });
	};
};

// * this is how we normally do
// export const createEvent = (event) => {
//   return {
//     type: 'ADD_EVENT',
//     event: event
//   }
// }

export function likePlusOne (id) {
  return ({type: LIKE_PLUS_ONE, payload: id})
}
