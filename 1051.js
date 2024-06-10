
// 1051. Height Checker

// A school is trying to take an annual photo of all the students. 
// The students are asked to stand in a single file line in non-decreasing 
// order by height. Let this ordering be represented by the integer array 
// expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that 
// the students are standing in. Each heights[i] is the height of the ith student 
// in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

var heights = [5,1,2,3,4];

var heightChecker = function (heights) {
  var arr = [...heights]
  arr.sort((a,b)=>a-b)
  var count = 0
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] != heights[i]) {
          count++
      }
  }
  return count;
};

console.log(heightChecker(heights))