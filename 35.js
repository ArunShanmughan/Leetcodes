
// 35. Search Insert Position

// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, return the index 
// where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var nums = [1,3,5,6], target = 2;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var first =0;
  var last = nums.length;

  while(first<=last){
      var mid = first+last>>1
      if(nums[mid]==target){
          return mid;
      }else if(nums[mid]<target){
          first=mid+1;
      }else{
          last = mid-1;
      }
  }
  return first;
};

console.log(searchInsert(nums,target))