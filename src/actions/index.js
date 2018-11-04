export const addQuestions = questions => ({
	type: 'ADD_QUESTIONS',
	questions
})

export const addAnswers = answers => ({
	type: 'ADD_ANSWERS',
	answers
})

export const scoreAnswers = (userInput, answers) => ({
	type: 'SCORE_ANSWERS',
	answers,
	userInput
})