

// 2869. Minimum Operations to Collect Elements

// You are given an array nums of positive integers and an integer k.

// In one operation, you can remove the last element of the array and add it to your collection.

// Return the minimum number of operations needed to collect elements 1, 2, ..., k.

var nums = [3,2,5,3,1], k = 3
// var nums = [3,1,5,4,2], k = 5

var minOperations = function(nums, k) {
  let arr = []
  let length = nums.length
  for(let i=0;i<length;i++){
      let isPresent = false
      for(let j=1;j<=k;j++){
          if(arr.includes(j)){
              isPresent = true
          }else{
              isPresent =false
              break;
          }
      }
      if(isPresent){
          break;
      }
      arr.push(nums.pop())
      arr.sort()
  }
  return arr.length
};

console.log(minOperations(nums,k))