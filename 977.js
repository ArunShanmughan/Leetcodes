
// 977. Squares of a Sorted Array

// Given an integer array nums sorted in non-decreasing order, 
// return an array of the squares of each number sorted in non-decreasing order.

var nums = [-4,-1,0,3,10]

var sortedSquares = function(nums) {
  let arr = []
  for(let i=0;i<nums.length;i++){
      arr.push(Math.abs(nums[i]*nums[i]))
  } 
  return arr.sort((a,b)=>a-b)
};

console.log(sortedSquares(nums))