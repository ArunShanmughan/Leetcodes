
// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, 
// find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

var nums = [5,7,7,8,8,10], target = 8;

var searchRange = function(nums, target) {
  var start =0;
  var end = nums.length-1;
  var temp = [-1,-1];

  while(start<=end) {
      var mid =Math.floor((start+end)/2);
      if (nums[mid] == target) {
          let left = mid;
          let right = mid;
          while(left>0&&nums[left-1]==target){
              left--;
          }
          while(right<nums.length-1&&nums[right+1]==target){
              right++;
          }
          return [left,right];
      }
      if(target<nums[mid]){
          end=mid-1;
      }else{
          start=mid+1;
      }
  }
  return temp;
};

console.log(searchRange(nums,target))