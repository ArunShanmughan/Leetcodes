// 198. House Robber

// You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed, the only constraint 
// stopping you from robbing each of them is that adjacent houses have 
// security systems connected and it will automatically contact the police 
// if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, 
// return the maximum amount of money you can rob tonight without alerting the police.

var nums = [2,7,9,3,1];

var rob = function(nums) {
  var height = nums.length
 if(height==1){
     return nums[0];
 }
 var pos2 = nums[0];
 var pos1 = Math.max(nums[0],nums[1]);
 var result = 0;
 for(let i=2;i<nums.length;i++){
     result = Math.max((pos2+nums[i]),pos1);
     pos2 = pos1;
     pos1 = result;
 }
 return pos1;
};

console.log(rob(nums))