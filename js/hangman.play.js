hangman.play = function() {

    var quitGame = false;

    while(!quitGame){
      var playing = true;
      var game = hangman.logic.setUpGame();
      while (playing) {
        var guess = hangman.ui.guessPrompt();
        //checks guess, prints board
        game.board =hangman.logic.playOneTurn(game, guess);
        //checks if player has won or lost
        playing = !hangman.logic.gameOver(guess, game);
    }
    quitGame = hangman.logic.playAgain(hangman.ui.playAgainAlert());
  }
};
