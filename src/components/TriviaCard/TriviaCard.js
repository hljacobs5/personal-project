import React from 'react';
import { Link } from 'react-router-dom';
import './TriviaCard.css';

const TriviaCard = (props) => {
	const answers = [props.result.correct_answer, ...props.result.incorrect_answers]
	const buttons = answers.map(answer => {
				console.log(answer)
				return <input type='radio' value={answer} />
			})

	return (
		<div>
			<Link to={`/${props.id}`} className='category'></Link>
			<h2>{props.result.question}</h2>
			<div className='buttons'>{buttons}</div>
{/*
			<input type='radio' value={props.result.correct_answer} />

			<input type='radio' value={[...props.result.incorrect_answers]}	/>*/}	
		</div>
	)
}

export default TriviaCard;