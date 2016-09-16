hangman.logic = {};


hangman.logic.wordContainsLetter = function(word, letter){
  return _.contains(word, letter);
};

hangman.ui.checkInput = function(guess, word){
  guess = guess.trim().toLowerCase();
  if(isLetter(guess)){
    if(_.contains(word, guess)){
      hangman.
    }
  }

};

hangman.ui.isLetter = function(guess){
  return guess.length === 1 && guess.match(/[a-z]/i);
};


// hangman.logic.fillBoard = function(guess, board, word) {
//
//     if (_.contains(word, guess)) {
//
//     }
//
// };
