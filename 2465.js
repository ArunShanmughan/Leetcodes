
// 2465. Number of Distinct Averages

// You are given a 0-indexed integer array nums of even length.

// As long as nums is not empty, you must repetitively:

// Find the minimum number in nums and remove it.
// Find the maximum number in nums and remove it.
// Calculate the average of the two removed numbers.
// The average of two numbers a and b is (a + b) / 2.

// For example, the average of 2 and 3 is (2 + 3) / 2 = 2.5.
// Return the number of distinct averages calculated using the above process.

// Note that when there is a tie for a minimum or maximum number, any can be removed.


var nums = [4,1,4,0,3,5]

var distinctAverages = function(nums) {
  nums.sort((a,b)=>a-b)
  let arr = []
  while(nums.length!=0){
      let temp = nums[0]+nums[nums.length-1]
      arr.push(temp/2)
      nums.splice(0,1)
      nums.splice(nums.length-1,1)
  }
  let ans = [...new Set(arr)]
  return ans.length
};

console.log(distinctAverages(nums))