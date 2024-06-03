
// 128. Longest Consecutive Sequence

// Given an unsorted array of integers nums, return 
// the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

var nums = [0,3,7,2,5,8,4,6,0,1];

var longestConsecutive = function (nums) {
  if (nums.length == 0) {
      return 0;
  }

  var numSet = new Set(nums);
  var count = 1;
  var longest = 1;

  for (const num of numSet) {
      if (numSet.has(num - 1)) {
          continue;
      }
      let curr = num;
      while (numSet.has(curr + 1)) {
          curr++;
          count++
      }
      longest = Math.max(longest, count);
      count = 1;
  }
  return longest
};

console.log(longestConsecutive(nums))