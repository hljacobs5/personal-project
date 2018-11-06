export const answerReducer = (state = [], action) => {
	console.log(action)
	switch(action.type) {
		case 'SUBMIT_ANSWERS':
			return [...state, action.answers]
		case 'CLEAR_ANSWERS':
			return state
		default:
			return state
	}
}