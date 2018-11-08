import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});

// describe('mapDispatchToProps', () => {

// })
