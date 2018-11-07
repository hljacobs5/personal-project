import { questionsReducer } from '../questionsReducer';

describe('questionsReducer', () => {
	it('should return the initial state', () => {
		const expected = [];
		const result = questionsReducer(undefined, []);
		expect(result).toEqual(expected);
	})

	it('should add questions to array in state', () => {
		const mockQuestions =  ['question', 'question2']

		const mockState = []

		const expected =  ['question', 'question2']

		const action = {
			type: 'ADD_QUESTIONS',
			questions: mockQuestions
		}

		const result = questionsReducer(mockState, action)
		expect(result).toEqual(expected)
	})
})


