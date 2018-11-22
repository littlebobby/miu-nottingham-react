

export const updateEventType = eventType => {
	return (dispatch) => dispatch({ type: 'UPDATE_EVENT_TYPE', eventType: eventType })
}
