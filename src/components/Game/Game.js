import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TriviaCard from '../TriviaCard/TriviaCard';
import './Game.css';
import ScorePage from '../ScorePage/ScorePage';
import { addScore } from '../../actions';

class Game extends Component {
	displayQuestions = () => {
		return this.props.questions.results.map(result => {
			return <TriviaCard result={result} />
		}) 
	}

	handleSubmit = () => {
		const score = this.props.answers.filter(answer => answer)
		const finalScore = score.length
		this.props.addScore(finalScore)
	}

	render() {
		if (this.props.questions.results) {
		return (
			<div>
				{this.displayQuestions()}
				<button onClick={this.handleSubmit}>Submit</button>
				<ScorePage score={this.props.score} />
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
	score: state.score,
	answers: state.answers
})

export const mapDispatchToProps = (dispatch) => ({
	addScore: (score) => dispatch(addScore(score))
})

export default connect(mapStateToProps, mapDispatchToProps)(Game);