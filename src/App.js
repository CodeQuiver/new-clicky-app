import React, { Component } from 'react';
import './App.css';
import Game from './components/Game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            The Clicky Game!
          </h1>

        </header>
        
        <Game />

      </div>
    );
  }
}

export default App;
