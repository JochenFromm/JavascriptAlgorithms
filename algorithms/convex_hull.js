
// Quickhull convex hull algorithm based on 
// https://en.wikipedia.org/wiki/Quickhull
// https://literateprograms.org/quickhull__javascript_.html

function getDistant(pt, line) {
    const Vy = line[1][0] - line[0][0];
    const Vx = line[0][1] - line[1][1];
    return (Vx * (pt[0] - line[0][0]) + Vy * (pt[1] -line[0][1]))
}

function findMostDistantPointFromBaseLine(baseLine, points) {
    let maxD = 0;
    let maxPt = new Array();
    const newPoints = new Array();
    for (const idx in points) {
        const pt = points[idx];
        const d = getDistant(pt, baseLine);
        if ( d > 0) {
            newPoints.push(pt);
        } else {
            continue;
        }
        if ( d > maxD ) {
            maxD = d;
            maxPt = pt;
        }
    } 
    return {'maxPoint': maxPt, 'newPoints': newPoints}
}

function getConvexHull(points) {

	const allBaseLines = new Array();
	function buildConvexHull(baseLine, points) {
	    allBaseLines.push(baseLine)
	    let convexHullBaseLines = new Array();
	    const t = findMostDistantPointFromBaseLine(baseLine, points);
	    if (t.maxPoint.length) { // if there is still a point "outside" the base line
	        convexHullBaseLines = 
	            convexHullBaseLines.concat( 
	                buildConvexHull( [baseLine[0],t.maxPoint], t.newPoints) 
	            );
	        convexHullBaseLines = 
	            convexHullBaseLines.concat( 
	                buildConvexHull( [t.maxPoint,baseLine[1]], t.newPoints) 
	            );
	        return convexHullBaseLines;
	    } else {  // if there is no more point "outside" the base line, the current base line is part of the convex hull
	        return [baseLine];
	    }    
	}

    // find first baseline
    let maxX, minX;
    let maxPt, minPt;
    for (const idx in points) {
        const pt = points[idx];
        if (pt[0] > maxX || !maxX) {
            maxPt = pt;
            maxX = pt[0];
        }
        if (pt[0] < minX || !minX) {
            minPt = pt;
            minX = pt[0];
        }
    }
    const ch = [].concat(buildConvexHull([minPt, maxPt], points),
                       buildConvexHull([maxPt, minPt], points))
    return ch;
}

var ConvexHull = (function (){
  return {
    getConvexHull: getConvexHull,
  };
})();

export { ConvexHull };
