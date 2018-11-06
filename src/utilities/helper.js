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
	
	const randomIndice = Math.floor(Math.random() * Math.floor(cleanIncorrectAnswers.length - 2))
	cleanIncorrectAnswers.splice(randomIndice, 0, cleanCorrectAnswer)
	return cleanIncorrectAnswers

}