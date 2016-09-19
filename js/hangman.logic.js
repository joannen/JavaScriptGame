hangman.logic = {};

hangman.logic.maxWrongGuesses = 6;

hangman.logic.setUpGame = function() {
    var game = {};
    game.word = hangman.words;
    game.board = hangman.ui.printEmptyBoard(game.word.length);
    game.guessedLetters = [];
    game.wrongGuessCounter = 0;
    return game;
};

hangman.logic.playOneTurn = function(game, guess) {
  if(this.isValid(guess, game.word)){
    if (hangman.logic.isLetter(guess)) {
        if (!_.contains(game.word, guess)) {
            game.guessedLetters.push(guess);
            game.wrongGuessCounter++;
        }
    }
  }
  return hangman.ui.printBoard(hangman.ui.fillBoard(guess, game));
};

hangman.logic.gameOver = function(guess, game){
  return this.hasWon(guess, game) || this.hasLost(this.maxWrongGuesses, game.wrongGuessCounter);
};

hangman.logic.isLetter = function(guess) {
    return guess.length === 1 && guess.match(/[a-z]/i);
};

hangman.logic.isValid = function(guess, word) {
    if (this.isLetter(guess) || guess.length === word.length) {
        return true;
    } else {
        hangman.ui.notValidGuessAlert();
        return false;
    }
};

hangman.logic.hasWon = function(guess,game) {
    if (guess === game.word || game.board.join("") === game.word) {
        hangman.ui.winAlert();
        return true;
    }
    return false;
};

hangman.logic.hasLost = function(wrongGuesses, maxGuesses) {
    if (wrongGuesses === maxGuesses) {
        hangman.ui.defeateAlert();
        return true;
    }
    return false;
};

hangman.logic.playAgain = function(playAgain){
  switch (playAgain){
    case 'Y'.trim().toLowerCase():
      return false;
    case 'E'.trim().toLowerCase():
      return true;
    default:
      return true;
  }
};
