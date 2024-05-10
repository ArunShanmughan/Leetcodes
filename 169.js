
// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

var nums = [2,2,1,1,1,2,2];

var majorityElement = function(nums) {
  let count=0;
  let candidate=0;

  for(let i=0;i<nums.length;i++){
      if(count===0){
          candidate=nums[i];
      }
      count+=(nums[i]===candidate)?1:-1;
  }

  return candidate;
};

console.log(majorityElement(nums))