import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TriviaCard.css';

class TriviaCard extends Component {
	constructor(props) {
		super();
		this.state = {
			isChecked: ''
		}
	}

	handleChecked = (changeEvent) => {
		this.setState({ isClicked: changeEvent.target.value })

		// if (this.state.isClicked) {
		// 	this
		// }
	}

	render() {
	const answers = [this.props.result.correct_answer, ...this.props.result.incorrect_answers]
	const buttons = answers.map(answer => {
				return (
					<div>
					   <input type='radio' 
					   		  id={answer} 
					   		  value={answer}
					   		  onClick={this.handleChecked}
					   		  checked={this.state.isClicked === answer} 
					   	/> 
					   <label for={answer}>{answer}</label>
					</div>
				)
			})

	return (
		<div>{/*
			<Link to={`/${props.id}`} className='category'></Link>*/}
			<h2>{this.props.result.question}</h2>
			<div className='buttons'>{buttons}</div>	
		</div>
	)
	}
	
  
}

export default TriviaCard;