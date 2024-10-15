

// 118. Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

var numRows = 5;

var generate = function(numRows) {
  let arr = []
  let count = 0
  while(numRows!=arr.length){
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
  return arr;
};

console.log(generate(numRows))