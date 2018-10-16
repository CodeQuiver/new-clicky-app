import React, { Component } from 'react';

//construct Square
class Square extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     imgValue: 'https://randomuser.me/api/portraits/men/54.jpg',
  //     isClicked: false,
  //   };
  // }

  render(props) {
    return (
      <button
        className="square"
        onClick={() => this.setState({isClicked:true})} //replace with a handleclick function
      >
        <img src={this.props.value.imgValue} alt="headshot of smiling person" width="150px" height="auto" />
      </button>
    );
  }
}
// function Square() {

//         return (
//             <button>
//                 X
//             </button>
//         )
// }
//create array of state objects
//call square constructor with array of state objects
//render each square to DOM


class Board extends Component {

  //constructor for tracking the state of the board, including the squares' current values
  constructor(props) {
    super(props);
    this.state = {
      squares: [
        {
          imgValue: 'https://randomuser.me/api/portraits/men/54.jpg',
          isClicked: false
        },
        {
          imgValue: 'https://randomuser.me/api/portraits/men/54.jpg',
          isClicked: false
        },
        {
          imgValue: 'https://randomuser.me/api/portraits/men/54.jpg',
          isClicked: false
        }
      ]
    };
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }

  render() {
    return (
      <section className="Board component-wrapper">
        This is the Board Component!
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        {/* <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div> */}
      </section>
    );
  }
}

export default Board;