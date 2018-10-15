import React, { Component } from 'react';
import Board from './Board.js'

class Game extends Component {
  render() {
    return (
      <section className="Game">
        This is the Game Component!
        
        {/* insert board component here */}
        <Board />

      </section>
    );
  }
}

export default Game;