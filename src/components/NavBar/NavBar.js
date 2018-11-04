import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';
import { Route, NavLink } from 'react-router-dom';

const NavBar = ({ fetchCategory }) => {
	return (
		<div>
			<NavLink
				name='politics'
				to='/politics'
				className='politics'>
				<button
					onClick={fetchCategory}
					name='politics'
					id='24'>Politics
				</button>
			</NavLink>
		</div>
	)
}

export default NavBar;