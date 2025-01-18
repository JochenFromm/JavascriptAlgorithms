import { ConvexHull } from "./../algorithms/convex_hull.js";

describe("ConvexHull", function() {
  describe("getConvexHull", function() {
    it("calculates getConvexHull for list of points", function() {
      const pts = [
        [3, 0],
        [0, 5],
        [1, 6],
        [4, 9],
        [7, 7],
        [4, 4],
        [6, 2]
      ];
      const result = ConvexHull.getConvexHull(pts);
      expect(result.length).toEqual(6);
      expect(result).toEqual([
      	[[1, 6], [4, 9]],
      	[[4, 9], [7, 7]],
      	[[7, 7], [6, 2]],
      	[[6, 2], [3, 0]],
      	[[3, 0], [0, 5]],
      	[[0, 5], [1, 6]]
      ])
    });
  });
});
