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
    for (var i = 0; i < game.word.length; i++) {
        if (game.word[i] === guess) {
            game.board[i] = guess;
        }
    }
    return game;
};

hangman.ui.printBoard = function(game) {
    hangman.pic(game.wrongGuessCounter);
    console.log("Wrong guesses: " + game.guessedLetters.join(' '));
    console.log(game.board.join(' '));
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    return game.board;
};

hangman.ui.startPrompt = function() {
    alert('Welcome to play the Hangman game! You can guess wrong 5 times before you lose the game. Press OK to continue.');
};

hangman.ui.guessPrompt = function() {
    var guess = prompt('Please guess a letter or word:');
    return guess;
};

hangman.ui.winAlert = function(word) {
    alert('Good job! You guessed right. The secret word was: ' + word.toUpperCase());
};

hangman.ui.defeateAlert = function(word) {
    alert('Sorry, you lost the game. The secret word was: ' + word.toUpperCase());
};

hangman.ui.notValidGuessAlert = function() {
    alert('Your guess was not a letter or did not have the right amount of letters. Please try again.');
};

hangman.ui.playAgainPrompt = function() {
    var playOn = prompt('Do you want to play another game? Enter Y to keep playing, enter E to exit');
    return playOn;
}
