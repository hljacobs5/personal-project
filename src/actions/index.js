export const addQuestions = questions => ({
	type: 'ADD_QUESTIONS',
	questions
})

export const addScore = score => ({
	type: 'ADD_SCORE',
	score
})

export const submitAnswers = answers => ({
	type: 'SUBMIT_ANSWERS',
	answers
})
