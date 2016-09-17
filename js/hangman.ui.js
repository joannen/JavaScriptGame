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

hangman.ui.fillBoard = function(guess, board, word) {
    var currentBoard = board;
    for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            currentBoard[i] = guess;
        }
    }
    return currentBoard;
};

hangman.ui.printBoard = function(board, guesses, guessedLetters) {
    hangman.pic(guesses);
    console.log("Wrong guesses: "+ guessedLetters.join(' '));
    console.log(board.join(' '));
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
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
