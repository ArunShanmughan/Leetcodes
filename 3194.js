
// 3194. Minimum Average of Smallest and Largest Elements

// You have an array of floating point numbers averages which is initially empty. 
// You are given an array nums of n integers where n is even.

// You repeat the following procedure n / 2 times:

// Remove the smallest element, minElement, and the largest element maxElement, from nums.
// Add (minElement + maxElement) / 2 to averages.
// Return the minimum element in averages.

var nums = [7,8,3,4,15,13,4,1];

var minimumAverage = function (nums) {
  var sorted = nums.sort((a, b) => a - b);
  var perMin = [];
  for (let i = 0; i < nums.length / 2; i++) {
      let cur = (nums[i] + nums[nums.length - (i + 1)]) / 2;
      perMin.push(cur);
  }

  return Math.min(...perMin)
};

console.log(minimumAverage(nums))