hangman.logic = {};

hangman.logic.fillBoard = function(guess, board, word){
  if(_.contains(word, guess)){
    console.log('CONTAINS');
  }
};

// hangman.logic.fillBoard = function(guess, board, word) {
//
//     if (_.contains(word, guess)) {
//
//     }
//
// };
