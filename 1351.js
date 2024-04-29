
// 1351. Count Negative Numbers in a Sorted Matrix

// Given a m x n matrix grid which is sorted in non-increasing order both row-wise 
// and column-wise, return the number of negative numbers in grid.

var grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];


var countNegatives = function(grid) {
  var count = 0;
  for(let i=0;i<grid.length;i++){
      let temp = grid[i];
      for(let j=0;j<temp.length;j++){
          if(temp[j]<0){
              count++;
          }
      }
  }
  return count;
};

console.log(countNegatives(grid));
