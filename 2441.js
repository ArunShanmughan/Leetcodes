
// 2441. Largest Positive Integer That Exists With Its Negative

// Given an integer array nums that does not contain any zeros, find 
// the largest positive integer k such that -k also exists in the array.

// Return the positive integer k. If there is no such integer, return -1.

var nums = [-10,8,6,7,-2,-3];

var findMaxK = function(nums) {
  let arr = []
  for(let i=0;i<nums.length;i++){
      if(nums[i]>0&&nums.includes(-nums[i])){
          arr.push(nums[i])
      }
  }
  if(arr.length>0){
      return Math.max(...arr)
  }else{
      return -1
  }
};

console.log(findMaxK(nums))