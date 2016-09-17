hangman.ui = {};

hangman.ui.printEmptyBoard = function(nrOfLetters) {
    var emptyBoard = [];
    for (var i = 0; i < nrOfLetters; i++) {
        emptyBoard.push('_');
    }
    hangman.pic(0);
    console.log(emptyBoard.join(' '));
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

    return emptyBoard;
};

hangman.ui.fillBoard = function(guess, game) {
    console.log(game);
    // var currentBoard = game.board;
    for (var i = 0; i < game.word.length; i++) {
        if (game.word[i] === guess) {
            game.board[i] = guess;
        }
    }
    // return currentBoard;
   return game;
};

hangman.ui.printBoard = function(game) {
    hangman.pic(game.wrongGuessCounter);
    console.log("Wrong guesses: "+ game.guessedLetters.join(' '));
    console.log(game.board.join(' '));
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    return game.board;
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
