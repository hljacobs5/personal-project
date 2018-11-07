import { scoreReducer } from '../scoreReducer.js';

describe('scoreReducer', () => {
	it('should return the initial state', () => {
		const expected = 0;
		const result = scoreReducer(undefined, 0)
		expect(result).toEqual(expected)
	});

	it('should add score value', () => {
		const mockScore = 3;

		const mockState = 0;

		const expected = 3;

		const action = {
			type: 'ADD_SCORE',
			score: mockScore
		}

		const result = scoreReducer(mockState, action);
		expect(result).toEqual(expected)
	})
})