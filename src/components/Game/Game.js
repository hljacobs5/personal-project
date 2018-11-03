import React, { Component } from 'react';
import { connect } from 'react-redux';
import TriviaCard from '../TriviaCard/TriviaCard'

class Game extends Component {
	displayQuestions = () => {
		// if (this.props.questions.results.length > 1) {
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