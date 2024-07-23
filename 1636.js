
// 1636. Sort Array by Increasing Frequency

// Given an array of integers nums, sort the array in increasing order 
// based on the frequency of the values. If multiple values have the same 
// frequency, sort them in decreasing order.

// Return the sorted array.

var nums = [-1,1,-6,4,5,-6,1,4,1]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let f = {}
  for (let num of nums) {
      if (f[num]) {
          f[num] += 1
      } else {
          f[num] = 1
      }
  }
  nums.sort((a, b) => {
      if (f[a] > f[b]) {
          return 1;
      } else if (f[a] < f[b]) {
          return -1;
      } else {
          return b - a;
      }
  })

  return nums;
};

console.log(frequencySort(nums))