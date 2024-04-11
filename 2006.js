
// 2006. Count Number of Pairs With Absolute Difference K

// Given an integer array nums and an integer k, return the number of pairs (i, j) 
// where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.

var nums = [1,2,2,1], k = 1

var countKDifference = function(nums, k) {
  var count = 0;
  for(let i=0;i<nums.length;i++){
      for(let j=i+1;j<nums.length;j++){
          let temp =0;
          temp = Math.abs(nums[i]-nums[j]);
          if(temp==k){
              count++;
          }
      }
  }
  return count;
};

console.log(countKDifference(nums,k))