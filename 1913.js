
// 1913. Maximum Product Difference Between Two Pairs

// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product 
// difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

// Return the maximum such product difference.

var nums = [4,2,5,9,7,4,8];

var maxProductDifference = function(nums) {
  nums.sort((a,b)=>b-a);
  fLar = nums[0];
  sLar = nums[1];
  fSm = nums[nums.length-1];
  sSm = nums[nums.length-2];
  var result = ((fLar*sLar)-(fSm*sSm));
  return result;
};

console.log(maxProductDifference(nums))