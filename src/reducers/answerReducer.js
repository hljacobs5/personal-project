export const answerReducer = (state = [], action) => {
	switch(action.type) {
		case 'SUBMIT_ANSWERS':
			return [...state, action.answers]
		default:
			return state
	}
}
