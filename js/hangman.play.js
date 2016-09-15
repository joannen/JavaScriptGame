hangman.play = function() {

    console.log('I got a word for you!');
    var word = hangman.words;
    console.log(word);

    var board = hangman.ui.printEmptyBoard(word.length);
    var guess = hangman.ui.guessPrompt();

};
