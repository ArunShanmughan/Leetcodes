
// 2239. Find Closest Number to Zero

// Given an integer array nums of size n, return the number with the 
// value closest to 0 in nums. If there are multiple answers, return the number 
// with the largest value.


var nums = [-4,-2,1,4,8];

var findClosestNumber = function (nums) {
  var res = []
  for (let i = 0; i < nums.length; i++) {
      res.push(Math.abs(0 - nums[i]))
  }
  var ans = Math.min(...res);
  if(!nums.includes(ans)){
      return ans = (ans-(ans*2))
  }else{
      return ans;
  }
};

console.log(findClosestNumber(nums))