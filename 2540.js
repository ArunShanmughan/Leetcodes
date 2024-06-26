
// 2540. Minimum Common Value

// Given two integer arrays nums1 and nums2, sorted in non-decreasing order,
//  return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.


var nums1 = [1,2,3];
var nums2 = [2,4];

var getCommon = function(nums1, nums2) {
  let i=0;
  let j=0;

  while(i<nums1.length && j<nums2.length){
      if(nums1[i]==nums2[j]){
          return nums1[i]
      }else if(nums1[i]<nums2[j]){
          i++;
          continue;
      }else{
          j++;
      }
  }
  return -1;
};

console.log(getCommon(nums1,nums2))