
function letterFrequency(text) {
  return countItems(text, 'letters');
}

function wordFrequency(text) {
  return countItems(text, 'words');
}

function countItems(text, item) {
  separator = (item == 'letters') ? '' : ' '

  // map phase
  words = text.split(separator).map(function(word){ return word.replace(/[\.,]/g,'') });

  // reduce phase
  hash = words.reduce(function(x, y) {
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
