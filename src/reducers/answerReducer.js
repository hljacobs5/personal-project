export const answerReducer = (state = [], action) => {
	switch(action.type) {
		case 'SUBMIT_ANSWERS':
			return [...state, action.answers]
		case 'DELETE_ANSWER':
			return state
		default:
			return state
	}
}