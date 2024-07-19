
// 1380. Lucky Numbers in a Matrix

// Given an m x n matrix of distinct numbers, return all lucky 
// numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum 
// element in its row and maximum in its column.

var matrix = [[3,6],[7,1],[5,2],[4,8]];

var luckyNumbers  = function(matrix) {
  let ans = []
  for(let i=0;i<matrix.length;i++){
      let minRow = Math.min(...matrix[i])
      let minColInd = matrix[i].indexOf(minRow)
      let isLucky = true
      for(let j=0;j<matrix.length;j++){
          if(matrix[j][minColInd]>minRow){
              isLucky = false
              break;
          }
      }
      if(isLucky){
          ans.push(minRow)
      }
  }
  return ans;
};

console.log(luckyNumbers(matrix))