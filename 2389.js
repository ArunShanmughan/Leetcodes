
// 2389. Longest Subsequence With Limited Sum

// You are given an integer array nums of length n, and an integer array queries of length m.

// Return an array answer of length m where answer[i] is the maximum size of a subsequence that 
// you can take from nums such that the sum of its elements is less than or equal to queries[i].

// A subsequence is an array that can be derived from another array by deleting some or no elements 
// without changing the order of the remaining elements.

var nums = [4,5,2,1], queries = [3,10,21];

var answerQueries = function(nums, queries) {
  let arr = []
  nums.sort((a,b)=>a-b);
  for(let i=0;i<queries.length;i++){
      let ans = []
      let value = 0;
      for(let j=0;j<nums.length;j++){
          value+=nums[j]
          if(value<=queries[i]){
              ans.push(nums[j])
          }
          if(value>queries[i]){
              break;
          }
      }
      arr.push(ans.length)
  }
  return arr;
};

console.log(answerQueries(nums,queries))