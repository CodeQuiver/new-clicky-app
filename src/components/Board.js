import React, { Component } from 'react';

//construct Square
function Square() {

        return (
            <button>
                X
            </button>
        )
}
//create array of state objects
//call square constructor with array of state objects
//render each square to DOM


class Board extends Component {
  render() {
    return (
      <section className="Board component-wrapper">
        This is the Board Component!
        <Square />
      </section>
    );
  }
}

export default Board;