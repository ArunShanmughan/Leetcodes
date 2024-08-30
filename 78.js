
// 78. Subsets

// Given an integer array nums of unique elements, 
// return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. 
// Return the solution in any order.



var nums = [1,2,3];

var subsets = function (nums) {
  const arr = [];
  arr.push([]);

  for (let i = 0; i < nums.length; i++) {
      let n = arr.length;
      for(let j=0;j<n;j++){
          let curr = [...arr[j],nums[i]];
          arr.push(curr)
      }
  }
  return arr;
};

console.log(subsets(nums))