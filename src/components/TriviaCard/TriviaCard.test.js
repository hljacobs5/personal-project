import React from 'react';
import { shallow, mount } from 'enzyme';
import { TriviaCard, mapStateToProps, mapDispatchToProps } from './TriviaCard';

describe('TriviaCard', () => {
	let wrapper;
	let mockHandleChecked;

	beforeEach(() => {
		mockHandleChecked = jest.fn();
		wrapper = shallow(
			<TriviaCard 
				isClicked={''}
			/>)
	})
	
	it('should exist', () => {
		expect(wrapper).toBeDefined();
	})

	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})

	// describe('handleChecked', () => {
	// 	it('should update state of isClicked', () => {

	// 	})
	// })
})

