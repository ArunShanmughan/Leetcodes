
// 1909. Remove One Element to Make the Array Strictly Increasing

// Given a 0-indexed integer array nums, return true if it can be made strictly
// increasing after removing exactly one element, or false otherwise.
// If the array is already strictly increasing, return true.

// The array nums is strictly increasing if nums[i - 1] < nums[i] for each index
// (1 <= i < nums.length).

var nums = [1,2,10,5,7];

var canBeIncreasing = function(nums) {
  let val = false
  for(let i=1;i<nums.length;i++){
      if(nums[i]<=nums[i-1]){
          if(val){
              return false
          }else val = true
          if(i>1 && nums[i]<=nums[i-2]){
              nums[i]=nums[i-1]
          }
      }
  }
  return true;
};

console.log(canBeIncreasing(nums))