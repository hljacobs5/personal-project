import React from 'react';
import { shallow, mount } from 'enzyme';
import { Game, mapStateToProps, mapDispatchToProps } from './Game';

describe('Game', () => {
	let wrapper;

	beforeEach(() => {
		const mockQuestions = { results: []}
		wrapper = shallow(<Game questions={mockQuestions}
								answers={[]}
								addScore={jest.fn()}
								history={[]}/>)
	})

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	})

	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})

	it('should call handleSubmit on button click', () => {
		let mockHandleSubmit = jest.fn()
		wrapper.instance().handleSubmit = mockHandleSubmit
		wrapper.instance().forceUpdate()
		wrapper.find('button').simulate('click')
		expect(mockHandleSubmit).toHaveBeenCalled()
	})
})