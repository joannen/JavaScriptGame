hangman.words = (function() {

    var words = [];

    words.push('corn');
    words.push('tomato');
    words.push('nyckelpiga');
    words.push('spyfluga');

    var word = _.sample(words);
    return word;
}());
