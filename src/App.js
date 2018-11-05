import React, { Component } from 'react';
import './App.css';
import { NavLink, Route, withRouter, Switch } from 'react-router-dom';
import TriviaControls from './components/TriviaControls/TriviaControls.js';
import { fetchData } from './utilities/apiCalls.js';
// import { triviaCleaner } from './utilities/helper.js';
import { connect } from 'react-redux';
import { addQuestions, addScore } from './actions';
import Game from './components/Game/Game.js';
import Home from './components/Home/Home.js';
import NavBar from './components/NavBar/NavBar.js';

class App extends Component {
  async componentDidMount() {
    const data = await fetchData()
    // triviaCleaner(data)
  }

 fetchCategory = async (event) => {
    const data = await fetchData(event.target.id)
    this.props.addQuestions(data)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Activist Trivia</h1>
          <Home />
        </header>
          <NavBar fetchCategory={ this.fetchCategory }/>
        <main>         
          <Route exact path='/politics' render={() => <Game 
            questions={ this.props.questions } />
          }/>
          <Route exact path='/animals' render={() => <Game
            questions={ this.props.questions } />
          }/>
          <Route exact path='/environment' render={() => <Game
            questions={ this.props.questions } />
          }/>
        </main>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  questions: state.questions,
  score: state.score
})

export const mapDispatchToProps = (dispatch) => ({
  addQuestions: (questions) => dispatch(addQuestions(questions)),
  addScore: (score) => dispatch(addScore(score))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
