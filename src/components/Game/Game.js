import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TriviaCard from '../TriviaCard/TriviaCard';
import './Game.css';

class Game extends Component {
	displayQuestions = () => {
		// if (this.props.pathname === '/politics') {
			console.log(this.props.questions)
		return this.props.questions.results.map(result => {
			return <TriviaCard result={result} />
		})
	  // } 
	}

	render() {
		if (this.props.questions.results) {
		return (
			<div>
				{this.displayQuestions()}
				<button>Submit</button>
			</div>
		)
	} else {
		return (
			<div>
				<h3>Not loaded</h3>
			</div>
		)
	}
  } 
}

export const mapStateToProps = (state) => ({
	questions: state.questions
})

export default connect(mapStateToProps)(Game);