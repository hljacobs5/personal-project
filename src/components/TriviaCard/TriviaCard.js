import React, { Component } from 'react';
import './TriviaCard.css';
import { connect } from 'react-redux';
import { cleanAnswers } from '../../utilities/helper.js';

class TriviaCard extends Component {
	constructor(props) {
		super();
		this.state = {
			isClicked: ''
		}
	}

	handleChecked = (changeEvent) => {
		this.setState({ isClicked: changeEvent.target.value })
	}

	render() {
		const correctAnswer = this.props.result.correct_answer
		const incorrectAnswers = this.props.result.incorrect_answers
		const answers = cleanAnswers(correctAnswer, incorrectAnswers)
		const buttons = answers.map(answer => {
					return (
						<div>
						   <input type='radio' 
						   		  id={answer.answer} 
						   		  value={answer.answer}
						   		  onClick={this.handleChecked}
						   		  checked={this.state.isClicked === answer.answer} 
						   	/> 
						   <label for={answer.answer}>{answer.answer}</label>
						</div>
					)
				})

		return (
			<div>
				<h2>{this.props.result.question}</h2>
				<div className='buttons'>{buttons}</div>	
			</div>
		)
	  }  
	}



export default TriviaCard;