import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>ACTIVIST TRIVIA</h1>
        </header>
        <main>
          <h3>Educate yourself about your passion.</h3>   
          <a href="#">Politics</a> 
        </main>
      </div>
    );
  }
}

export default App;
