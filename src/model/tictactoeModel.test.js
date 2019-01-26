import React from 'react';
import PropTypes from 'prop-types';
import TicTacToeModel from './tictactoeModel';

describe('Board Model', () => {
    const dataProvider = [3, 8, 9];

    describe('generate', () => {
        dataProvider.forEach((num) => {
            it(`generate board of ${num}`, () => {
                const boardData = TicTacToeModel.generateBoardData(num);

                expect(boardData.length).toBe(num);

                boardData.map(function(row, rIndex) {
                  expect(row.length).toBe(num);
              })
            });


        });
    });
  }
);
