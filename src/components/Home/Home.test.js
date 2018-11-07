import React from 'react';
import { shallow, mount } from 'enzyme';
import { Home } from './Home'

describe('Home', () => {
	let wrapper;

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	})

	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})
})