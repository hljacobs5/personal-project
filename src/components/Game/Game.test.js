import React from 'react';
import { shallow, mount } from 'enzyme';
import { Game, mapStateToProps, mapDispatchToProps } from './Game';

describe('Game', () => {
	let wrapper;

	beforeEach(() => {
		const mockQuestions = { results: ['true', 'false']}
		wrapper = shallow(<Game questions={mockQuestions}
								answers={['true', 'true', 'false']}
								addScore={jest.fn()}
								history={[]}
						  />)
	})

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	})

	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})


	describe('handleSubmit', () => {
    	const mockEvent = { preventDefault: jest.fn() };

		it('should call handleSubmit on button click', () => {
			let mockHandleSubmit = jest.fn()
			wrapper.instance().handleSubmit = mockHandleSubmit
			wrapper.instance().forceUpdate()
			wrapper.find('button').simulate('click')
			expect(mockHandleSubmit).toHaveBeenCalled()
		})

		it('should call addScore under the right conditions', () => {
		
			wrapper.find('button').simulate('click')
			wrapper.instance().handleSubmit(mockEvent)

			expect(wrapper.instance().props.addScore).toHaveBeenCalled()
		})
	})
})