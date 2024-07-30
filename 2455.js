
// 2455. Average Value of Even Numbers That Are Divisible by Three

// Given an integer array nums of positive integers, return the average value 
// of all even integers that are divisible by 3.

// Note that the average of n elements is the sum of the n elements divided by 
// n and rounded down to the nearest integer.

var nums = [43,9,75,76,25,96,46,85,19,29,88,2,5,24,60,26,76,24,96,82,97,97,72,35,21,77,82,30,94,55,76,94,51];

var averageValue = function(nums) {
  let sum = 0
  let n = 0
  for(let i=0;i<nums.length;i++){
      if(nums[i]%3==0&&nums[i]%2==0){
          sum += nums[i]
          n++
      }
  }
  if(sum!=0){
      return Math.floor(sum/n)
  }else{
      return 0
  }
};

console.log(averageValue(nums))