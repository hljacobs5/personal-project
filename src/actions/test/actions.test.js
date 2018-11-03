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
})