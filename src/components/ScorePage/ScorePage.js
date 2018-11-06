import React from 'react';
import './ScorePage.css';

const ScorePage = (props) => {
	return (
		<div>
			<h1>{props.score}/10</h1>
		</div>
	)
}

export default ScorePage;