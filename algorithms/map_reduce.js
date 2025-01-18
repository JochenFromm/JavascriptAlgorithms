const _ = require('lodash');

function letterFrequency(text, min = 3) {
  const results = countItems(text, 'letters');
  return _.pickBy(results, function (value) { return value > min } );
}

function wordFrequency(text, min = 3) {
  let results = countItems(text, 'words');
  return _.pickBy(results, function (value) { return value > min } );
}

function countItems(text, item) {
  const separator = (item == 'letters') ? '' : ' '

  // map phase
  const words = text.split(separator).map(function(word){
    return word.toLowerCase().replace(/[\.,]/g,'')
  });

  // reduce phase
  const hash = words.reduce(function(x, y) {
    x[y] = (x[y] || 0) + 1;
    return x;
  }, {});

  return hash;
}

var mapReduce = (function (){
  return {
    letterFrequency: letterFrequency,
    wordFrequency: wordFrequency,
  };
})();

module.exports = mapReduce;
