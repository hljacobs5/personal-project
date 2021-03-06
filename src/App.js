import React, { Component } from 'react';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
import { fetchData } from './utilities/apiCalls.js';
import { connect } from 'react-redux';
import { addQuestions, addScore } from './actions';
import Game from './components/Game/Game.js';
import Home from './components/Home/Home.js';
import NavBar from './components/NavBar/NavBar.js';
import ScorePage from './components/ScorePage/ScorePage.js';

class App extends Component {
  async componentDidMount() {
    const data = await fetchData()
  }

  fetchCategory = async (event) => {
    const data = await fetchData(event.target.id)
    this.props.addQuestions(data)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <link href="https://fonts.googleapis.com/css?family=Kodchasan" rel="stylesheet" />
          <h1>Activist Trivia</h1>
          <NavBar fetchCategory={ this.fetchCategory }/>
        </header>
        <main>  
          <Route exact path='/' component={Home} />      
          <Route exact path='/politics' render={() => <Game 
            questions={ this.props.questions } />
          }/>
          <Route exact path='/animals' render={() => <Game
            questions={ this.props.questions } />
          }/>
          <Route exact path='/environment' render={() => <Game
            questions={ this.props.questions } />
          }/>
          <Route exact path='/score' 
          render={() => <ScorePage score={this.props.score}/>} />
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
