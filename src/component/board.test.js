import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Board from './board';
import TicTacToeModel from '../model/tictactoeModel';

Enzyme.configure({ adapter: new Adapter() })
const boardData = TicTacToeModel.generateBoardData(3);
const updateTileCallbackFn = {}
const gameOverCallbackFn = {}
describe('Board', () => {
  it('should render correctly', () => {
    const output = shallow(
      //<Board boardData={boardData}/>
      <Board boardData={boardData} updateTileCallback={updateTileCallbackFn} gameOverCallback={gameOverCallbackFn}/>

    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
