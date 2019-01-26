import React from 'react';
import PropTypes from 'prop-types';
import Tile from './tile';
import App from "../App";
import '../stylesheets/component/board.css';

class Board extends React.Component{

  constructor(props){
    super(props);
    this.validateMove = this.validateMove.bind(this);
    this.checkCross = this.checkCross.bind(this);
    this.checkRow = this.checkRow.bind(this);
    this.checkColumn = this.checkColumn.bind(this);
  }

  validateMove(row, col){
    let sym = App.nextSymbol.value;
    if(this.props.boardData[row][col] == ""){
      this.props.boardData[row][col] = sym;

      if(this.checkCross(sym)
              || this.checkRow(0, sym)
              || this.checkRow(1, sym)
              || this.checkRow(2, sym)
              || this.checkColumn(0, sym)
              || this.checkColumn(1, sym)
              || this.checkColumn(2, sym)){
        this.props.gameOverCallback();
        return;
      }

      this.props.updateTileCallback(row, col);
    }
  }

  checkCross(sym){
    const tileData = this.props.boardData;
    return ((tileData[0][0] == sym
      && tileData[1][1] == sym
      && tileData[2][2] == sym) ||
      (tileData[0][2] == sym
        && tileData[1][1] == sym
        && tileData[2][0] == sym));
  }

  checkRow(row, sym){
    const tileData = this.props.boardData;
    return (tileData[row][0] == sym
      && tileData[row][1] == sym
      && tileData[row][2] == sym);
  }

  checkColumn(col, sym){
    const tileData = this.props.boardData;
    return (tileData[0][col] == sym
      && tileData[1][col] == sym
      && tileData[2][col] == sym);

  }

  render(){
    const tileData = this.props.boardData;
    const validateMv = this.validateMove;
    return (<table>
            <tbody>
            {
              tileData.map(function(row, rIndex) {
                  return (
                    <tr key={rIndex}>
                    {
                      row.map(function(column, cIndex){
                        const key = rIndex +"x"+cIndex;
                        return <td key={key}><Tile  row={rIndex} column={cIndex} value={tileData[rIndex][cIndex]} onClick={validateMv}/></td>;
                      })
                    }
                    </tr>
                )
            })
          }
          </tbody>
          </table>)
  }
}


export default Board;
