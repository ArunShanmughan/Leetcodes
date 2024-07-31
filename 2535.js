
// 2535. Difference Between Element Sum and Digit Sum of an Array

// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) 
// that appear in nums.
// Return the absolute difference between the element sum and digit sum 
// of nums.

// Note that the absolute difference between two integers x and y is 
// defined as |x - y|.

 var nums = [1,15,6,3];

var differenceOfSum = function(nums) {
  let numSum = 0;
  let strSum = 0
  for(let i=0;i<nums.length;i++){
      numSum+=nums[i]
      let temp = nums[i]+""
      for(let j=0;j<temp.length;j++){
          strSum+= Number(temp[j])
      }
  }
  return numSum-strSum
};

console.log(differenceOfSum(nums))