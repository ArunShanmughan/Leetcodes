
// 896. Monotonic Array

// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. 
// An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or 
// false otherwise.

var nums = [6,5,4,4]

var isMonotonic = function (nums) {
  var incCount = 0
  var decCount = 0
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= nums[i + 1]) {
          incCount++
      } 
      if (nums[i] >= nums[i + 1]) {
          decCount++
      }
  }
  if ((decCount == nums.length - 1) || (incCount == nums.length - 1)) {
      return true
  } else {
      return false
  }
};

console.log(isMonotonic(nums))