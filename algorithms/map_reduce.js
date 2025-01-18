// Classic MapReduce algorithm for text analysis which
// uses the map and reduce functions from Javascript
// to count letters and words :-)
// https://en.wikipedia.org/wiki/MapReduce

function pickBy(object, filter_func) {
    return Object.assign(
        ...Object
            .entries(object)
            .filter(([, v]) => filter_func(v))
            .map(([k, v]) => ({ [k]: v }))
    );
}

function letterFrequency(text, min = 3) {
  const results = countItems(text, 'letters');
  return pickBy(results, function (value) { return value > min } );
}

function wordFrequency(text, min = 3) {
  let results = countItems(text, 'words');
  return pickBy(results, function (value) { return value > min } );
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

export { mapReduce };
