hangman.play = function() {

    console.log('I got a word for you!');
    var word = hangman.words;

    var wrongGuessCounter = 0;
    var maxGuesses = 6;

    var board = hangman.ui.printEptyBoard(word.length);

};
