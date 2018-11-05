import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TriviaCard from '../TriviaCard/TriviaCard';
import './Game.css';
import ScorePage from '../ScorePage/ScorePage';

class Game extends Component {
	displayQuestions = () => {
		return this.props.questions.results.map(result => {
			console.log(result)
			return <TriviaCard result={result}/>
		}) 
	}

	// handleSubmit() {
	// 	const correctAnswer = this.props.questions.results.correct_answer
	// 	if () {

	// 	this.props.addScore(this.props.score += 1)
	// 	} else {
	// 		null
	// 	}
	// }

	render() {
		if (this.props.questions.results) {
		return (
			<div>
				{this.displayQuestions()}
				<button onClick={this.handleSubmit}>Submit</button>
				{/*<ScorePage score={this.state.score} />*/}
			</div>
		)
	} else {
		return (
			null
	  )
	}
  } 
}

export const mapStateToProps = (state) => ({
	questions: state.questions,
	score: state.score
})

// export const mapDispatchToProps = (dispatch) => ({
// 	addScore: (score) => dispatch(addScore(score))
// })

export default connect(mapStateToProps)(Game);