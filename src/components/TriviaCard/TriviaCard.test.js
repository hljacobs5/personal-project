import React from 'react';
import { shallow, mount } from 'enzyme';
import { TriviaCard, mapStateToProps, mapDispatchToProps } from './TriviaCard';

describe('TriviaCard', () => {
	let wrapper;
	let mockHandleChecked;
	let result = {
		correct_answer: 'answer',
		incorrect_answers: ['answer2', 'answer3', 'answer4']
	}

	beforeEach(() => {
		mockHandleChecked = jest.fn();
		wrapper = shallow(
			<TriviaCard 
				isClicked={''}
				result={result}
			/>)
	})


	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})

	describe('handleChecked', () => {
		it('should update state of isClicked', () => {
			
		})
	})
})

