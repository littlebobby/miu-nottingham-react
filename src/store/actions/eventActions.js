import { LIKE_PLUS_ONE } from "../actions";

// pasuing the dispatch and make some async call 
// after we have done that -> then we can carry on with the dispatch
export const createEvent = event => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// make async call to database
		const firestore = getFirestore();
		// ! use getState to get the current state
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;
		// a reference to events collection
		firestore.collection('events').add({
			info: {...event},
			interactions: {likes: 0, views: 0, comments: 0},
			joinedUsers: [],
			likedUsers: [],
			authorFirstName: profile.firstName,
			authorLastName: profile.lastName,
			authorId: authorId,
			createdAt: new Date()
		}).then(() => {
			dispatch({ type: 'CREATE_EVENT', event: event });
		}).catch((err) => {
			dispatch({ type: 'CREATE_EVENT_ERROR', err})
		})
	};
};

export const likePlusOne = id => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		const obj = firestore.collection('events').doc(id);
		console.log(getState)
		// obj.update({
		// 	'interactions.likes': 44
		// }).then(function() {
		// 	console.log("Document successfully updated!");
		// }).catch((err) => {
		// 	dispatch({ type: 'LIKE_PLUS_ONE_ERROR', err})
		// })
		console.log(obj);
		dispatch({ type: LIKE_PLUS_ONE, id: id })
	}
}

// * this is how we normally do
// export const createEvent = (event) => {
//   return {
//     type: 'ADD_EVENT',
//     event: event
//   }
// }

// export function likePlusOne (id) {
//   return ({type: LIKE_PLUS_ONE, payload: id})
// }
