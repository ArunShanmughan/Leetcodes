
// 674. Longest Continuous Increasing Subsequence

// Given an unsorted array of integers nums, 
// return the length of the longest continuous increasing 
// subsequence (i.e. subarray). The subsequence must be 
// strictly increasing.

// A continuous increasing subsequence is defined by 
// two indices l and r (l < r) such that it is [nums[l], 
// nums[l + 1], ..., nums[r - 1], nums[r]] and for 
// each l <= i < r, nums[i] < nums[i + 1].

var nums = [1,3,5,4,2,3,4,5];

var findLengthOfLCIS = function(nums) {
  let count = 1;
  let arr = []
  for(let i=0;i<nums.length;i++){
      if(nums[i]<nums[i+1]){
          count++
      }else{
          arr.push(count)
          count = 1
      }
  }
  if(count==nums.length){
      return count;
  }
  return Math.max(...arr)
};

console.log(findLengthOfLCIS(nums))