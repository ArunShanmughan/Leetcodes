
// 1509. Minimum Difference Between Largest and Smallest Value in Three Moves

// You are given an integer array nums.

// In one move, you can choose one element of nums and change it to any value.

// Return the minimum difference between the largest and smallest value of nums after performing at most three moves.

var nums = [1,5,0,10,14];

var minDifference = function (nums) {
  nums.sort((a, b) => (a - b));
  let length = nums.length;
  if(length<=4){
      return 0;
  }
  let difference1=nums[length-1]-nums[3];
  let difference2=nums[length-2]-nums[2];
  let difference3=nums[length-3]-nums[1];
  let difference4=nums[length-4]-nums[0];
  let result= Math.min(difference1,difference2,difference3,difference4)
  return result;
};

console.log(minDifference(nums))