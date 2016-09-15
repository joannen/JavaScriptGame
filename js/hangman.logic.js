hangman.logic = {};

hangman.logic.fillBoard = function(guess, board, word){
  if(_.contains(word, guess)){
    for(var i =0; i < word.length; i++){
      if(word[i]===guess){
        boar[i]=guess;
      }
    }
  }
  return board;
};

// hangman.logic.fillBoard = function(guess, board, word) {
//
//     if (_.contains(word, guess)) {
//
//     }
//
// };
