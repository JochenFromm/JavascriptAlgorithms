describe("MapReduce", function() {
  const mapReduce = require('./../algorithms/map_reduce.js');

  describe("text frequency", function() {
    it("contains lots of quotes", function() {
      text = "Yes Yes Yes we can";
      expect(mapReduce.wordFrequency(text)).toEqual({ Yes: 3, we: 1, can: 1 });
    });

    it("contains lots of quotes", function() {
      text = "Yes we can";
      expect(mapReduce.letterFrequency(text)).toEqual({
        Y: 1,
        e: 2,
        s: 1,
        ' ': 2,
        w: 1,
        c: 1,
        a: 1,
        n: 1,
      });
    });
  });
});
