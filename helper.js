
// helper functions for convex hull from 
// https://literateprograms.org/quickhull__javascript_.html

function getRandomPoints(numPoint, xMax, yMax) {
    var points = new Array();
    var phase = Math.random() * Math.PI * 2;
    for (var i = 0; i < numPoint/2; i++) {
        var r =  Math.random()*xMax/4;
        var theta = Math.random() * 1.5 * Math.PI + phase;
        points.push( [ xMax /4 + r * Math.cos(theta), yMax/2 + 2 * r * Math.sin(theta) ] )
    }
    var phase = Math.random() * Math.PI * 2;
    for (var i = 0; i < numPoint/2; i++) {
        var r =  Math.random()*xMax/4;
        var theta = Math.random() * 1.5 * Math.PI + phase;
        points.push( [ xMax /4 * 3 +  r * Math.cos(theta), yMax/2 +  r * Math.sin(theta) ] )
    }
    return points
}

// eslint-disable-next-line no-unused-vars
function plotBaseLine(line,color) {
    const context = document.getElementById('convex_hull_demo').getContext('2d');
    var pt1 = line[0]
    var pt2 = line[1];
    context.save()
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(pt1[0],pt1[1]);
    context.lineTo(pt2[0],pt2[1]);
    context.stroke();
    context.restore();
}   

var pts;
// eslint-disable-next-line no-unused-vars
function plotPoints(size=200) {
    const ctx = document.getElementById('convex_hull_demo').getContext('2d');
    ctx.clearRect(0,0,size,size);
    ctx.fillStyle = 'rgb(0,0,0)';
    pts = getRandomPoints(250,size,size);	
    for (var idx in pts) {
        var pt = pts[idx];
        ctx.fillRect(pt[0],pt[1],2,2);
    }
}

