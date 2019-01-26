import React from 'react';
import PropTypes from 'prop-types';
import App from "../App";
import '../stylesheets/component/tile.css';

class Tile extends React.Component{



  constructor(props) {
    super(props);
    this.validateMoveCallback = this.props.onClick;
    this.key = this.props.row + "x"+ this.props.column;
    this.state = { value: this.props.value};
    this.tileClicked = this.tileClicked.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState){
   if(nextProps.value !== prevState.value){
     return { value: nextProps.value};
   }
   else return null;
  }

  tileClicked(){
    console.log("CLICKED1 " + App.appStatus.value);
    if(App.appStatus.value == "GAME OVER")
      return;

    if(App.appStatus.value == "NEW")
      App.appStatus.value = "STARTED";
console.log("CLICKED2");
    this.validateMoveCallback(this.props.row, this.props.column);
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.props.value != nextState.value;
  }

  render(){
    const val = 'tile row'+ this.props.row + ' column' + this.props.column ;
    return <div id={this.key} className={val} onClick={this.tileClicked}>{this.props.value}</div>;
  }

}

Tile.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
}

export default Tile;
