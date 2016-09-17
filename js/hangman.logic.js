hangman.logic = {};

hangman.logic.maxWrongGuesses = 6;
hangman.logic.wrongGuessCounter = 0;

hangman.logic.setUpGame = function() {
    var game = {};
    game.word = hangman.words;
    game.board = hangman.ui.printEmptyBoard(game.word.length);
    game.guessedLetters = [];
    game.wrongGuessCounter = 0;
    return game;
};

hangman.logic.playOneTurn = function(word, board, guess, guessedLetters) {
    if (hangman.logic.isLetter(guess)) {
        if (!_.contains(word, guess)) {
            guessedLetters.push(guess);
            this.wrongGuessCounter++;
        }
    }
    return hangman.ui.printBoard(hangman.ui.fillBoard(guess, board, word), this.wrongGuessCounter, guessedLetters);
};

hangman.logic.gameOver = function(guess, word, board){
  return this.hasWon(guess, word, board) || this.hasLost(this.maxWrongGuesses, this.wrongGuessCounter);
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

hangman.logic.hasWon = function(guess, word, board) {
    if (guess==word | board.join("") === word) {
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
