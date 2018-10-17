import React, { Component } from 'react';
//TODO- need to re-arrange relationship b/w Square and Board to pass onClick events and because Board is managing Square directly

//construct Square
class Square extends Component {

  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()} //TODO replace with a handleclick function
      >
        <img src={this.props.value.imgValue} alt="headshot of smiling person" width="160px" height="auto" />
      </button>
    );
  }
}


class Board extends Component {

  //constructor for tracking the state of the board, including the squares' current values
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
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
        },
        {
          imgValue: 'https://randomuser.me/api/portraits/women/21.jpg',
          isClicked: false
        },
        {
          imgValue: 'https://randomuser.me/api/portraits/women/81.jpg',
          isClicked: false
        },
        {
          imgValue: 'https://randomuser.me/api/portraits/men/1.jpg',
          isClicked: false
        },
        {
          imgValue: 'https://randomuser.me/api/portraits/men/66.jpg',
          isClicked: false
        },
        {
          imgValue: 'https://randomuser.me/api/portraits/women/2.jpg',
          isClicked: false
        },
        {
          imgValue: 'https://randomuser.me/api/portraits/women/22.jpg',
          isClicked: false
        },
        {
          imgValue: 'https://randomuser.me/api/portraits/men/22.jpg',
          isClicked: false
        },
        {
          imgValue: 'https://randomuser.me/api/portraits/men/9.jpg',
          isClicked: false
        },
        {
          imgValue: 'https://randomuser.me/api/portraits/women/54.jpg',
          isClicked: false
        }
      ]
    };
  }
  // END constructor


  //function to render the squares in the board
  renderSquare = (i) => {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} id={i} key={i} />;
  }
    //note- key and id are separate because key has restrictions on its usage because React uses it for reference, and I want to use id for myself to track the place in the array this square maps to. IIRC a component can't inquire about its own key.
  // END render squares function


  //handleClick function
  handleClick = (i) => {
    alert("handleClick Clicked!!!");
    //first, check if this.props.value.isClicked === true/false
    //if true, lose the game- run gameLoss function
    if (this.state.squares[i].isClicked === true) {
      alert("that was clicked before- gameloss function will now be triggered");
      //run gameloss function
      this.gameLoss();
    } else {
      //1- update the state of the item in the Board (setState) squares[{this.props.id}] (meaning use the id to get the correct index to update in the squares array)
      // this.setState.squares[i]({isClicked: true});
      const newSquaresArray = this.state.squares.slice();
      newSquaresArray[i].isClicked = true;
      this.setState({squares: newSquaresArray});
      
      //2- shuffle the array with a helper function that accepts an array and returns a new array
          //(should automatically re-render since this changes the board's state)

      //3- run incrementScoreCounter helper function
      this.incrementScoreCounter();
    }
  }
    

        
  //END handleclick function

  //shuffleArray helper function
    //accepts an array
    //randomly selects one item at a time from that array and pushes it to a new array, using slice to remove it without mutating original
    //when the entire array has been re-shuffled, returns the new array
  //END shuffleArray helper function


  //incrementScoreCounter helper function
  incrementScoreCounter = () => {
    let newScore = this.state.score + 1;
    if (newScore >= 12) {
      alert("Congratulations! You have played a perfect game and clicked every picture only once! You won the game!");
      newScore = 0;
      //call shuffleArray function
    }
    this.setState({score:newScore});
  }
  //END incrementScoreCounter helper function


  //gameLoss helper function
  gameLoss = () => {
    //alert that you've lost and display final score
    alert("Sorry, you clicked that before. You lost the game. Final score: " + this.state.score);
    //reset the score counter to 0
    this.setState({score:0});

    //TODO-call shuffleArray function
  }
  //END gameLoss helper function



  render() {
    return (
      <section className="Board component-wrapper">
        This is the Board Component!
        <h2>Current Score: {this.state.score} </h2>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
      </section>
    );
  }
}

export default Board;