
// 908. Smallest Range I;

// You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and change 
// nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply 
// this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once 
// for each index in it.

var nums = [1,3,6], k = 3;

var smallestRangeI = function(nums, k) {
  let min = Math.min(...nums)
  let max = Math.max(...nums)
 
  let diff = (max-k ) - (min+k)

  if(diff>=0){
      return diff
  }else{
      return 0
  }
  // let max = Math.max(...nums);
  // let min = Math.min(...nums);
  // if(max!=min){
  // max= (max-k)+min;
  // min = min+k;
  // }
  // return max-min;
};
console.log(smallestRangeI(nums,k))