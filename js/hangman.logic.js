hangman.logic = {};

hangman.logic.fillBoard = function(guess, board, word){
  var currentBoard = board.slice();

  if(_.contains(word, guess)){
    for(var i =0; i < word.length; i++){
      if(word[i]===guess){
        currentBoard[i]=guess;
      }
    }
  }
  return currentBoard;
};

// hangman.logic.fillBoard = function(guess, board, word) {
//
//     if (_.contains(word, guess)) {
//
//     }
//
// };
