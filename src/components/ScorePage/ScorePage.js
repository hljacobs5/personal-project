import React from 'react';
import './ScorePage.css';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';

const ScorePage = (props) => {
	return (
		<div>
			<h1 className='score'>{props.score}/10</h1>
		</div>
	)
}

export const mapStateToProps = (state) => ({
	score: state.score
})

export default connect(mapStateToProps)(ScorePage);