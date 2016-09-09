var words = [];

words.push('bajs');
words.push('kiss');
words.push('nyckelpiga');
words.push('spyfluga');

var getWord = function() {
    var word = _.sample(words);
    console.log(words);
    return word;
};
