hangman.words = (function() {

    var words = ['nyckelpiga', 'kanin', 'gris', 'julgran'];

    var word = _.sample(words);
    return word;
}());
