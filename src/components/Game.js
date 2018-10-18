import React, { Component } from 'react';
import Board from './Board.js'

class Game extends Component {
  render() {
    return (
      <section className="Game">
        <div className="intro">
          <p>
          Welcome to the Clicky Game!</p>
          <p> Let's test how good your memory is for faces. 
          Try to click each of the pictures below only once. 
          You get a point for every new picture you click without repeating yourself. 
          If you can get up to 12, you win the game.
          </p>
          <p>Good luck!</p>
        </div>
        
        {/* insert board component here */}
        <Board />

      </section>
    );
  }
}

export default Game;