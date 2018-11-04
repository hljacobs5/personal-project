import React, { Component } from 'react';
import './App.css';
import { NavLink, Route, withRouter, Switch } from 'react-router-dom';
import TriviaControls from './components/TriviaControls/TriviaControls.js';
import { fetchData } from './utilities/apiCalls.js';
import { triviaCleaner } from './utilities/helper.js';
import { connect } from 'react-redux';
import { addQuestions } from './actions';
import Game from './components/Game/Game.js';
import Home from './components/Home/Home.js'

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
          <NavLink to='/' className='button'>Home</NavLink>
          <NavLink to='/game/' className='button'>Politics</NavLink>
        </header>
        <main>         
          <Route exact path='/politics' render={() => <Game 
            questions={ questions }
            onClick={(event) => this.fetchCategory(event)}
          }/>
          <button id='24' onClick={(event) => this.fetchCategory(event)}>Politics</button> 
          <button id='27' onClick={(event) => this.fetchCategory(event)}>Animals</button>
          <button id='17' onClick={(event) => this.fetchCategory(event)}>Environment</button>
        </main>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addQuestions: (questions) => dispatch(addQuestions(questions))
})

export default connect(null, mapDispatchToProps)(App);
