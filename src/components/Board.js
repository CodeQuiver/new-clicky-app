import React, { Component } from 'react';

//construct Square
class Square extends React.Component {

  render(props) {
    return (
      <button
        className="square"
        onClick={() => this.setState({isClicked:true})} //TODO replace with a handleclick function
      >
        <img src={this.props.value.imgValue} alt="headshot of smiling person" width="150px" height="auto" />
      </button>
    );
  }
}


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
          imgValue: 'https://randomuser.me/api/portraits/women/9.jpg',
          isClicked: false
        },
        {
          imgValue: 'https://randomuser.me/api/portraits/men/81.jpg',
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