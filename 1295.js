
// 1295. Find Numbers with Even Number of Digits

// Given an array nums of integers, return how many of them contain an even number of digits.

var nums = [12,345,2,6,7896];

var findNumbers = function(nums) {
  let c=0;
  for(let i=0;i<nums.length;i++){
      let arr = Array.from(String(nums[i]),Number);
      if(arr.length%2===0){
          c++;
      }
  }
    return c;
};

console.log(findNumbers(nums))