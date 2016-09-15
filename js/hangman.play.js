hangman.play = function() {

    console.log('I got a word for you!');
    var word = hangman.words;
    var wrongGuessCounter = 0;
    var maxWrongGuesses = 6;
    var board = hangman.ui.printEmptyBoard(word.length);

    while (wrongGuessCounter<maxWrongGuesses){

      var guess = hangman.ui.guessPrompt();
      board = hangman.ui.printBoard(hangman.logic.fillBoard(guess, board, word));
      wrongGuessCounter ++;

    };



};
