import * as actions from '../index.js';

describe('actions', () => {
	it('should have a type of ADD_QUESTIONS', () => {
		const questions = [];
		const expectedAction = {
			type: 'ADD_QUESTIONS',
			questions
		};

		const result = actions.addQuestions(questions);
		expect(result).toEqual(expectedAction);
	});

	it('should have a type of ADD_SCORE', () => {
		const score = 0;
		const expectedAction = {
			type: 'ADD_SCORE',
			score
		};

		const result = actions.addScore(score);
		expect(result).toEqual(expectedAction)
	})

	it('should have a type of SUBMIT_ANSWERS', () => {
		const answers = [];
		const expectedAction = {
			type: 'SUBMIT_ANSWERS',
			answers
		}

		const result = actions.submitAnswers(answers)
		expect(result).toEqual(expectedAction)
	})
})