

// 268. Missing Number

// Given an array nums containing n distinct numbers in the range [0, n],
//  return the only number in the range that is missing from the array.

var nums = [9,6,4,2,3,5,7,0,1]

var missingNumber = function(nums) {
  let count = 0
  nums.sort((a,b)=>a-b)

  for(let i=0;i<nums.length;i++){
      if(nums[i]!=count){
          return count
      }
      count++
  }
  return count;
};

console.log(missingNumber(nums))