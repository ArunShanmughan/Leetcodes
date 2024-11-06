

// 398. Random Pick Index

// Given an integer array nums with possible duplicates, randomly output the index of a given target number. 
// You can assume that the given target number must exist in the array.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the array nums.
// int pick(int target) Picks a random index i from nums where nums[i] == target. If there are multiple valid 
// i's, then each index should have an equal probability of returning.


// -------question started----------


// ["Solution", "pick", "pick", "pick"]
// [[[1, 2, 3, 3, 3]], [3], [1], [3]]

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  Solution.prototype.nums = [...nums]
};

/** 
* @param {number} target
* @return {number}
*/
Solution.prototype.pick = function(target) {
  let arr = []
  for(let i=0;i<Solution.prototype.nums.length;i++){
      if(target==Solution.prototype.nums[i]){
          arr.push(i)
      }
  }
  console.log(Math.floor(Math.random()*arr.length))

  return arr[Math.floor(Math.random()*arr.length)]
  // return Math.random(arr)
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.pick(target)
*/