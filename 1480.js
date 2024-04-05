
// 1480. Running Sum of 1d Array


// Given an array nums. We define a running sum of an array as
// runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.



var temparr = [1,2,3,4]
var runningSum = function(nums) {
  var arr = [];
  var sum = 0;
  for(let i=0;i<nums.length;i++){
      sum+=nums[i];
      arr.push(sum);
  }
  return arr;
};

console.log(runningSum(temparr))