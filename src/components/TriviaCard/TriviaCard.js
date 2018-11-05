import React, { Component } from 'react';
import './TriviaCard.css';
import { connect } from 'react-redux';

class TriviaCard extends Component {
	constructor(props) {
		super();
		this.state = {
			isChecked: ''
		}
	}

	handleChecked = (changeEvent) => {
		this.setState({ isClicked: changeEvent.target.value })
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
			<div>
				<h2>{this.props.result.question}</h2>
				<div className='buttons'>{buttons}</div>	
			</div>
		)
	  }  
	}

const mapDispatchToProps = (dispatch) => ({
	addScore: (score) => dispatch(addScore(score))
})

export default connect(null, mapDispatchToProps)(TriviaCard);