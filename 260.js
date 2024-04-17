
// 260. Single Number III

// Given an integer array nums, in which exactly two elements appear only once and all the other
// elements appear exactly twice.
//  Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in
//  linear runtime complexity and uses only constant extra space.

var nums = [1,2,1,3,2,5];


var singleNumber = function(nums) {
  let flag = 0;
  var arr = [];
  for(let i=0;i<nums.length;i++){
      let count =0;
      for(let j=0;j<nums.length;j++){
          if(nums[i]==nums[j]){
              count++
          }
      }if(count==1){
          arr[flag]=nums[i]
          flag++
      }
  }
  return arr;
};

console.log(singleNumber(nums));