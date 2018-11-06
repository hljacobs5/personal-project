import { fetchData } from './apiCalls.js';

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