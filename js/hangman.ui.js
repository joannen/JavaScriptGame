hangman.ui = {};

hangman.ui.printEmptyBoard = function(nrOfLetters){
  var emptyBoard = [];
  for (var i =0; i < nrOfLetters; i++){
    emptyBoard.push('_');
  }
  console.log(emptyBoard.join(' '));
  return emptyBoard;
};

hangman.ui.printBoard = function(board, guesses){
  hangman.pic(guesses);
  console.log(board.join(' '));
  return board;
};

hangman.ui.guessPrompt = function() {
    var guess = prompt('Please guess a letter or word: ');
    return guess;
};

hangman.ui.winAlert = function() {
    alert('Yeay you won this awesome game, yeay :)');
};

hangman.ui.defeateAlert = function() {
    alert('Neay you lost this awesome game, you suck :/');
};

hangman.ui.notValidGuessAlert = function() {
    alert('Not a letter or wrong word lenght. Seriously how stupid are you?');
};
