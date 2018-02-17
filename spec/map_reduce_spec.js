describe("MapReduce", function() {
  const mapReduce = require('./../algorithms/map_reduce.js');

  describe("operations", function() {
    const text = 'And so even though we face the difficulties of today '+
                 'and tomorrow, I still have a dream. It is a dream '+
                 'deeply rooted in the American dream.';

    it("calculates letter frequency", function() {
      expect(mapReduce.letterFrequency('kitten', 0)).toEqual({
        k: 1,
        i: 1,
        t: 2,
        e: 1,
        n: 1
      });
    });

    it('calculates letter frequency in long texts', function() {
      const chars = {
        a: 12,
        ' ': 26,
        e: 15
      };
      expect(mapReduce.letterFrequency(text, 10)).toEqual(chars);
    });

    it("can count words", function() {
      sentence = 'Yes yes yes we can. We can do it';
      const words = {
        yes: 3,
        we: 2,
        can: 2
      };
      expect(mapReduce.wordFrequency(sentence, 1)).toEqual(words);
    });

    it('can parse long texts', function() {
      const words = {
        and: 2,
        the: 2,
        a: 2,
        dream: 3
      };
      expect(mapReduce.wordFrequency(text, 1)).toEqual(words);
    });
  });
});
