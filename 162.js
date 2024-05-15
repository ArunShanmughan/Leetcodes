
// 162. Find Peak Element

// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. 
// If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always 
// considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

var nums = [1,2,3,1];


var findPeakElement = function(nums) {
  var largest = nums[0];
  var result = 0;
  for(let i=1;i<nums.length;i++){
      if(nums[i]>largest){
          largest = nums[i];
          result = i
      }
  }
  return result;
};

console.log(findPeakElement(nums))