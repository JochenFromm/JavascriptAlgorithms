
function permutations(s, callback) {
  const n = s.length;
  const a = s.split('');
  permute(a, 0, n-1, callback);
}

function permute(a, l, r, callback) {
  if (l == r) {
    callback(a.join(''));
  } else {
    for (let i = l; i <= r; i++) {
      let x = a[l]; a[l] = a[i]; a[i] = x;
      permute([...a], l+1, r, callback);
      x = a[l]; a[l] = a[i]; a[i] = x;
    }
  }
}

var Backtracking = (function (){
  return {
    permutations: permutations,
  };
})();

module.exports = Backtracking;
