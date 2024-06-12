
// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n 
// respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).


var nums1 = [1,2], nums2 = [3,4];

var findMedianSortedArrays = function(nums1, nums2) {
  var newarr = nums1.concat(nums2);
  var newlength = newarr.length;
  newarr.sort((a, b) => a - b);    
  if (newlength%2 === 0) {
       return (newarr[newlength/2-1] + newarr[newlength/2])/2; 
  }else{
      return newarr[(newlength-1)/2];
  }
};

console.log(findMedianSortedArrays(nums1,nums2))