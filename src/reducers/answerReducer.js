export const answerReducer = (state = [], action) => {
	switch(action.type) {
		case 'SUBMIT_ANSWERS':
		console.log(action.answers)
			return [...state, action.answers]
		default:
			return state
	}
}