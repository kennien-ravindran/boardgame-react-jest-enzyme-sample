import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './component/board';
import PropTypes from 'prop-types';
import TicTacToeModel from './model/tictactoeModel';

import './App.css';

class App extends Component {

  static Player1 = { name: "Player1", value : "O"};
  static Player2 = { name: "Player2", value : "X"};
  static nextPlayer = App.Player1;
  static nextSymbol = { value : "O"};
  static appStatus = {value : "NEW"};

  constructor(props){
    super(props);
    this.updateTile = this.updateTile.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.state = {gameStatus: "NEW", boardData:[]};
    this.state.boardData = TicTacToeModel.generateBoardData(3);
  }

  updateTile(row, column){
      this.setState({gameStatus: this.state.gameStatus, boardData: this.state.boardData});
      App.nextPlayer = App.nextPlayer == App.Player1 ? App.Player2 : App.Player1
      App.nextSymbol.value = App.nextPlayer.value;
  }

  gameOver(){
    App.appStatus ={value: "GAME OVER" };
    this.setState({gameStatus: App.appStatus.value});
  }

  startNewGame(size){
    App.appStatus ={value: "NEW" };
    App.nextSymbol.value = "O";
    this.setState({gameStatus: "NEW", boardData: TicTacToeModel.generateBoardData(size)});
  }


  updateStatus(status){
    this.setState({gameStatus: status});
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">

            TikTacToe Game - React-jest-demo .
            <div>Game Info:</div> <GameStatus status={this.state}/>

          <div>Player 1: O </div><span> </span><div> Player 2: X</div>
          <br/>
          <div><button id="startNewGame" onClick={() => this.startNewGame(3)}>Start New TicTacToe Game</button>
          <button id="startNewGame" onClick={() => this.startNewGame(9)}>Create Sudoku Board</button>
          <button id="startNewGame" onClick={() => this.startNewGame(8)}>Create Chess Board</button>
          </div>
          <br/>
          <Board boardData={this.state.boardData} updateTileCallback={this.updateTile} gameOverCallback={this.gameOver}/>

        </header>
      </div>
    );
  }
}

function GameStatus(props){
  return <div>{props.status.gameStatus}</div>;
}

export default App;
