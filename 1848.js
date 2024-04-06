
//1848. Minimum Distance to the Target Element

// Given an integer array nums (0-indexed) and two integers target and start,
//  find an index i such that nums[i] == target and abs(i - start) is minimized.
//   Note that abs(x) is the absolute value of x.

// Return abs(i - start).

// It is guaranteed that target exists in nums.

var  nums = [1,2,3,4,5], target = 5, start = 3;

var getMinDistance = function(nums, target, start) {
  var arr = [];

  for(let i=0;i<nums.length;i++){
      if(nums[i]==target){
          arr.push(Math.abs(i-start));
      }
  }
  return Math.min(...arr);
};

console.log(getMinDistance(nums,target,start))