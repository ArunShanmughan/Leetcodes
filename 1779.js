
// 1779. Find Nearest Point That Has the Same X or Y Coordinate

// You are given two integers, x and y, which represent your current location 
// on a Cartesian grid: (x, y). You are also given an array points where each 
// points[i] = [ai, bi] represents that a point exists at (ai, bi). A point is valid 
// if it shares the same x-coordinate or the same y-coordinate as your location.

// Return the index (0-indexed) of the valid point with the smallest Manhattan 
// distance from your current location. If there are multiple, return the valid point 
// with the smallest index. If there are no valid points, return -1.

// The Manhattan distance between two points (x1, y1) and (x2, y2) is 
// abs(x1 - x2) + abs(y1 - y2).

var x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]];

var nearestValidPoint = function(x, y, points) {
  let temp = Infinity;
  let cur = -1;
  for(let i=0;i<points.length;i++){
      let samp = points[i];
      if(samp[0]==x||samp[1]==y){
          const manh= Math.abs(x-samp[0])+Math.abs(y-samp[1]);
          if(manh<temp){
              cur = i
              temp = manh
          }
      }
  }
  return cur
};

console.log(nearestValidPoint(x,y,points))