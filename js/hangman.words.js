hangman.words = (function() {

    var words = ['nyckelpiga', 'kanin', 'gris', 'julgran', 'sten', 'blomkruka', 'byxor'];

    var word = _.sample(words);
    return word;
}());
