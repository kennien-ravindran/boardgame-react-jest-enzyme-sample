class TicTacToeModel
{

  static generateBoardData(size){
     var data = [];
     for(var rowIdx = 0 ; rowIdx < size ; rowIdx++){
       data[rowIdx] = [];
       for(var colIdx = 0 ; colIdx < size ; colIdx++){
           data[rowIdx][colIdx]='';
       }
     }

     return data;
   }
}

export default TicTacToeModel;
