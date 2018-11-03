import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink, Route, withRouter } from 'react-router-dom';
import TriviaControls from './components/TriviaControls/TriviaControls.js';
import { fetchData } from './utilities/apiCalls.js';
import { triviaCleaner } from './utilities/helper.js';
import { connect } from 'react-redux';
import { addQuestions } from './actions';
import Game from './components/Game/Game.js';

class App extends Component {
  async componentDidMount() {
    const data = await fetchData()
    triviaCleaner(data)
  }

  async fetchCategory(event) {
    const data = await fetchData(event.target.id)
    this.props.addQuestions(data)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>ACTIVIST TRIVIA</h1>
        </header>
        <main>
          <Route exact path='/game' component={Game} />
          <button id='24' onClick={(event) => this.fetchCategory(event)}>Politics</button> 
          <button id='27' onClick={(event) => this.fetchCategory(event)}>Animals</button>
          <button id='17' onClick={(event) => this.fetchCategory(event)}>Environment</button>
        </main>
        <Game />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addQuestions: (questions) => dispatch(addQuestions(questions))
})

export default connect(null, mapDispatchToProps)(App);
