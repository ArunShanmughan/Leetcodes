
// 3131. Find the Integer Added to Array I

// You are given two arrays of equal length, nums1 and nums2.

// Each element in nums1 has been increased (or decreased in the case of negative) 
// by an integer, represented by the variable x.

// As a result, nums1 becomes equal to nums2. Two arrays are considered equal 
// when they contain the same integers with the same frequencies.

// Return the integer x.

var nums1 = [2,6,4], nums2 = [9,7,5];

var addedInteger = function(nums1, nums2) {
  let small1 = Math.min(...nums1)
  let small2 = Math.min(...nums2)
  return (small2-small1)
};
console.log(addedInteger(nums1,nums2))