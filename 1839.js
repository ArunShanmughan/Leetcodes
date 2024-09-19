
// 1893. Check if All the Integers in a Range Are Covered

// You are given a 2D integer array ranges and two integers left and right. 
// Each ranges[i] = [starti, endi] represents an inclusive interval between 
// start i and end i.

// Return true if each integer in the inclusive range [left, right] is covered 
// by at least one interval in ranges. Return false otherwise.

// An integer x is covered by an interval ranges[i] = [starti, endi]
// if start i <= x <= end i

var ranges =[[1,50]]

var isCovered = function(ranges, left, right) {
  for(let i=left;i<=right;i++){
      let covered = false
      for(let [start,end] of ranges){
          if(start<=i&&i<=end){
              covered = true
              break;
          }
      }
      if(!covered){
          return false
      }
  }
  return true
};

console.log(isCovered(ranges))