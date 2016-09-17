hangman.play = function() {

    var playing = true;
    var game = hangman.logic.setUpGame();

    while (playing) {
        var guess = hangman.ui.guessPrompt();
        game.board =hangman.logic.playOneTurn(game.word, game.board, guess, game.guessedLetters);
        playing = !hangman.logic.gameOver(guess, game.word, game.board);
    }
};
