
//2215. Find the Difference of Two Arrays

// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

var nums1 = [1,2,3], nums2 = [2,4,6];

var findDifference = function(nums1, nums2) {
  const answer = [[], []];

  function isPresent(num, arr) {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === num) {
              return true;
          }
      }
      return false;
  }

  for (const num1 of nums1) {
      if (!isPresent(num1, nums2) && !answer[0].includes(num1)) {
          answer[0].push(num1);
      }
  }

  for (const num2 of nums2) {
      if (!isPresent(num2, nums1) && !answer[1].includes(num2)) {
          answer[1].push(num2);
      }
  }

  return answer;

};

console.log(findDifference(nums1,nums2))