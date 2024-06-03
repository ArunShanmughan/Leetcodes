
// 905. Sort Array By Parity

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

var nums = [3,1,2,4]

var sortArrayByParity = function(nums) {
  var odd = [];
  var even = [];
  if(nums.length<2){
      return nums
  }
  for(let i=0;i<nums.length;i++){
      if(nums[i]%2==0){
          even.push(nums[i])
      }else{
          odd.push(nums[i])
      }
  }

  return [...even,...odd]
};

console.log(sortArrayByParity(nums))