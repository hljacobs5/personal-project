import React from 'react';
import { shallow, mount } from 'enzyme';
import { Game, mapStateToProps, mapDispatchToProps } from './Game';

describe('Game', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Game />)
	})

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	})

	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})

	it('should call handleSubmit on button click', () => {
		
	})
})