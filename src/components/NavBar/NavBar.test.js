import React from 'react';
import { shallow, mount } from 'enzyme';

import NavBar from './NavBar.js'

describe('NavBar', () => {
	let wrapper;
	let mockFunction;

	beforeEach(() => {
		mockFunction = jest.fn()
		wrapper = shallow(<NavBar
			fetchCategory={mockFunction}
			/>);
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should call fetchCategory when politics is clicked', () => {
		wrapper.find('.politics').simulate('click')
		expect(mockFunction).toBeCalled()
	});

	it('should call fetchCategory when animals is clicked', () => {
		wrapper.find('.animals').simulate('click')
		expect(mockFunction).toBeCalled()
	});

	it('should call fetchCategory when environment is clicked', () => {
		wrapper.find('.environment').simulate('click')
		expect(mockFunction).toBeCalled()
	});
});