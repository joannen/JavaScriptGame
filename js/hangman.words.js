hangman.words = (function() {

    var words = [];

    words.push('bajs');
    words.push('kiss');
    words.push('nyckelpiga');
    words.push('spyfluga');

    var word = _.sample(words);
    return word;
}());
