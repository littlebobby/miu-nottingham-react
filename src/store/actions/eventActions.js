import { LIKE_PLUS_ONE } from "../actions";

// pasuing the dispatch and make some async call 
// after we have done that -> then we can carry on with the dispatch
export const createEvent = event => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// make async call to database
		const firestore = getFirestore();
		// a reference to events collection
		firestore.collection('events').add({
			...event, 
			authorFirstName: 'Ying',
			authorLastName: 'Zhou',
			authorId: 2134,
			createdAt: new Date()
		}).then(() => {
			dispatch({ type: 'CREATE_EVENT', event: event });
		}).catch((err) => {
			dispatch({ type: 'CREATE_EVENT_ERROR', err})
		})
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
