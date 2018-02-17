
describe("Backtracking", function() {
  const backtracking = require('./../algorithms/backtracking.js');

  describe("permutations", function() {
    it("calculates all permutations for 3 characters", function() {
      const result = [];
      callback = (text) => { result.push(text) };
      backtracking.permutations("abc", callback);
      const permutations = [ 'abc', 'acb', 'bac', 'bca', 'cba', 'cab' ];
      expect(result.length).toEqual(2*3);
      expect(result).toEqual(permutations);
    });

    it("calculates all permutations for 4 characters", function() {
      const result = [];
      callback = (text) => { result.push(text) };
      backtracking.permutations("abcd", callback);
      const permutations = [ 'abcd', 'abdc', 'acbd', 'acdb', 'adcb', 'adbc',
                             'bacd', 'badc', 'bcad', 'bcda', 'bdca', 'bdac',
                             'cbad', 'cbda', 'cabd', 'cadb', 'cdab', 'cdba',
                             'dbca', 'dbac', 'dcba', 'dcab', 'dacb', 'dabc' ];
      expect(result.length).toEqual(2*3*4);
      expect(result).toEqual(permutations);
    });

  });
});
