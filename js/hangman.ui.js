hangman.ui = {};
hangman.ui.printEmptyBoard = function(nrOfLetters) {
    var emptyBoard = [];
    for (var i = 0; i < nrOfLetters; i++) {
        emptyBoard.push('_');
    }
    console.log(emptyBoard.join(' '));
    return emptyBoard;
};

hangman.ui.guessPrompt = function() {
    var guess = prompt('Please guess a letter or word: ');
    return guess;
};
