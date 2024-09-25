
// 45. Jump Game II

// You are given a 0-indexed array of integers nums of length n. 
// You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. 
// In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated 
// such that you can reach nums[n - 1].

var nums = [2,3,1,1,4]

var jump = function (nums) {
  let jumps = 0;
  let endVal = 0
  let longest = 0
  for (let i = 0; i < nums.length - 1; i++) {
      longest = Math.max(longest, i + nums[i]);
      if (i == endVal) {
          jumps++
          endVal = longest
      }
      if (endVal >= nums.length - 1) {
          break;
      }
  }
  return jumps
};

console.log(jump(nums))