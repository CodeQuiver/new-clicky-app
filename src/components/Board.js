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
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i, this.shuffleArray)} id={i} key={i} />;
  }
    //note- key and id are separate because key has restrictions on its usage because React uses it for reference, and I want to use id for myself to track the place in the array this square maps to. IIRC a component can't inquire about its own key.
  // END render squares function


    //shuffleArray helper function
    shuffleArray = (array) => {
      // makes a copy (startingArray) with slice()
      let startingArray = array.slice();
      let endingArray = [];
      console.log("startingArray == " + startingArray.toString());
      for (let i = 0; i < array.length; i++) {
        // let innerArray = startingArray; //did this to prevent odd counting of iterations that I was getting from directly changing startingArray
        console.log("i ========================================== " + i.toString());
        // randomly selects an array index to manipulate
        let currentIndex = Math.floor(Math.random() * (startingArray.length));
        console.log("currentIndex == " + currentIndex.toString());
        console.log("endingArray (before) == " + endingArray.toString());
        // pushes it to endingArray
        endingArray.push(startingArray[currentIndex])
        console.log("endingArray (after) == " + endingArray.toString());
        // splices the currentIndex entry from the startingArray
        console.log("startingArray (before) == " + startingArray.toString());
        startingArray.splice(currentIndex, 1);
        console.log("startingArray (after) == " + startingArray.toString());
      }
      console.log("endingArray (at the end of the loop) " + endingArray.toString());
      return endingArray;
    };
  
  
  
        
        // then deletes that item from the array using splice startingArray.splice(i, 1); syntax: array.splice(index, howmany)
      //when the entire array has been re-shuffled, returns the new array
    //END shuffleArray helper function

  //handleClick function
  handleClick = (i, shuffleArray) => {
    shuffleArray([1,2,3,4,5,6,7]);
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
      let newSquaresArray = this.state.squares.slice();
      newSquaresArray[i].isClicked = true;
      this.setState({squares: newSquaresArray});
      
      //2- shuffle the array with a helper function that accepts an array and returns a new array
          //(should automatically re-render since this changes the board's state)

      //3- run incrementScoreCounter helper function
      this.incrementScoreCounter();
    }
  }
  //END handleclick function





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
    //reset all states of isClicked to "false"
    // let newSquaresArray = this.state.squares.slice();
    // for (let i = 0; i < newSquaresArray.length; i++) {
    //   newSquaresArray[i].isClicked = false;
    // }
    // // console.log("new Squares Array is: " + JSON.stringify(newSquaresArray));
    // this.setState({squares: newSquaresArray});
    this.resetGame();

  }
  //END gameLoss helper function

  //RESET helper function
  resetGame = () => {
    //reset the score counter to 0
    this.setState({score:0});

    //reset all states of isClicked to "false"
      //first, copies the squares state array
    let newSquaresArray = this.state.squares.slice();

      //then updates the array values of the new array
    for (let i = 0; i < newSquaresArray.length; i++) {
      newSquaresArray[i].isClicked = false;
    }
    // console.log("new Squares Array is: " + JSON.stringify(newSquaresArray));
      //replaces old state of squares with the new array- this is done this way in order to not mutate the original data
    this.setState({squares: newSquaresArray});

    //TODO-call shuffleArray function
  }
  //END RESET helper function





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