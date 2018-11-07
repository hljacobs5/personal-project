import React from 'react';
import { shallow, mount } from 'enzyme';
import { ScorePage } from './ScorePage';

describe('ScorePage', () => {
	let wrapper;

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	})

	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})
})