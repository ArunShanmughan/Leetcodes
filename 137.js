
// 137. Single Number II

// Given an integer array nums where every element appears three times except for one,
// which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only
// constant extra space.

var nums = [2,2,3,2];

var singleNumber = function(nums) {
  var count=0
  for(let i=0;i<nums.length;i++){
      count = 0
      for(let j=0;j<nums.length;j++){
         if(nums[i]==nums[j]){
           count++
          }
      }
      if(count==1){
      return nums[i]
      }
  }
};

console.log(singleNumber(nums));