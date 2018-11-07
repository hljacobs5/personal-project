import React from 'react';
import './ScorePage.css';
import { connect } from 'react-redux';

const ScorePage = (props) => {
	return (
		<div>
			<h1 className='score'>{props.score}/10</h1>
			<button>Home</button>
		</div>
	)
}

export const mapStateToProps = (state) => ({
	score: state.score
})

export default connect(mapStateToProps)(ScorePage);