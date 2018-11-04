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
			<NavLink
				name='animals'
				to='/animals'
				className='animals'>
				<button
					onClick={fetchCategory}
					name='animals'
					id='27'>Animals
				</button>
			</NavLink>
			<NavLink
				name='environment'
				to='/environment'
				className='environment'>
				<button
					onClick={fetchCategory}
					name='animals'
					id='17'>Environment 
				</button>
			</NavLink>
		</div>
	)
}

export default NavBar;