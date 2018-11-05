import React, { Component } from 'react';


export class Question extends Component {
	constructor(props) {
		super();
		this.state = {

		}
	}
}
	const answers = [props.result.correct_answer, ...props.result.incorrect_answers]
	const buttons = answers.map((answer, i) => {

		return (
			<div>
			   <input type='radio' id={answer} value={answer} 
			   checked={false} /> 
			   <label for={answer}>{answer}</label>
			</div>
		)
	})

	return (
		<div>
			{/*<Link to={`/${props.id}`} className='category'></Link>*/}
			<h2>{props.result.question}</h2>
			<form className='buttons'>{buttons}</form>
		</div>
	)
  }


