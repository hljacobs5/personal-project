import { questionsReducer } from '../questionsReducer';

describe('questionsReducer', () => {
	it('should return the initial state', () => {
		const expected = [];
		const result = questionsReducer(undefined, []);
		expect(result).toEqual(expected);
	})

	it('should add questions to array in state', () => {
		const mockQuestions =  
	})
})


