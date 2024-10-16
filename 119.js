
// 119. Pascal's Triangle II

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

var rowIndex = 3;


var getRow = function(rowIndex) {
  let arr = []
  let count = 0
  while((rowIndex+1)!=arr.length){
      if(arr.length==0){
          arr.push([1])
      }else{
          let prev = arr[count]
          let newRow = [1]

          for(let i=0;i<prev.length-1;i++){
              newRow.push(prev[i]+prev[i+1])
          }
          newRow.push(1)
          arr.push(newRow)
          count++
      }
  }
  return arr[rowIndex];
};
console.log(getRow(rowIndex))