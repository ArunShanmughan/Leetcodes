
// 75. Sort Colors

// Given an array nums with n objects colored red, white, or blue, 
// sort them in-place so that objects of the same color are adjacent, 
// with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, 
// white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// var nums = [2,0,2,1,1,0];

// var sortColors = function(nums) {
//   var temp=0
//   for(var i=0;i<nums.length;i++){
//       for(var j=i+1;j<nums.length;j++){
//           if(nums[i]>nums[j]){
//               temp=nums[i]
//               nums[i]=nums[j]
//               nums[j]=temp
//           }
//       }
//   }
//   return nums
// };

// console.log(sortColors(nums));


var nums = [2,0,2,1,1,0];

var sortColors = function(nums) {
  return nums.sort((a,b)=>a-b);
};

console.log(sortColors(nums));

