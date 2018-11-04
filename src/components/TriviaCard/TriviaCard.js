import React from 'react';
import { Link } from 'react-router-dom';
import './TriviaCard.css';

const TriviaCard = (props) => {
	return (
		<div>
			<Link to={`/${props.id}`} className='category'></Link>
			<h3>{props.result.question}</h3>
		</div>
	)
}

export default TriviaCard;