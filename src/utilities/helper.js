import { fetchData } from './apiCalls.js';

// export const triviaCleaner = async (category) => {
// 	const politicsQuestions = await fetchData();	if (politicsQuestions) {
// 		const results = politicsQuestions.results.filter(result => {
// 			return result.category.includes('Politics')
// 		})
// 	}
// }

export const cleanAnswers = (correctAnswer, incorrectAnswers) => {
	const cleanCorrectAnswer = {
		answer: correctAnswer,
		correct: true
	};

	const cleanIncorrectAnswers = incorrectAnswers.map(answer => {
		return {
		answer: answer,
		correct: false
		}
	});

	return [cleanCorrectAnswer, ...cleanIncorrectAnswers]

}