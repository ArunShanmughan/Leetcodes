// 2574. Left and Right Sum Differences

// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. 
// If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. 
// If there is no such element, rightSum[i] = 0.
// Return the array answer.


let nums = [12,30,3,18,42,48,36,15,19,37,29,23,51,9,27,19,17,43,17,29,26,26,4,50,21,42,6,44,23,38,18,23,35,39,2,50,49,39,44,9,31,33,33,3,17,19,47,16,42,19,40,19,35,32,9,44,43,20,41,47,10,20,14,27,1,37,5,9,24,5,13,32,21,41,47,14,42,10,45,7,20,36,35,7,35,27,47,27,15,9,8,49,47,38,38,16,30,3,46,33,49,3,36,27,41,25,34,31,36,30,17,36,42,42,31,16,8,4,46,41,46,33,11,31,23,30,12,4,36,48,33,30,2,13,19,5,27,13,18,23,47,12,15,33,18,36,48,29,6,45,48,3,40,38,37,50,36,43,41,35,5,47,32,18,5,10,37,37,9,43,30,4,27,31,3,4,14,11,18,12,47,32,35,30,40,45,29,51,2,5,38,17,11,11,2,51,50,48,41,3,4,8,49,44,25,9,45,28,3,43,30,42,28,42,21,39,18,30,36,40,39,13,13,26,44,44,23,42,34,44,32,38,4,5,24]

var leftRightDifference = function(nums) {
  function sumFn(arr,ind,last){
      let temp = 0
      for(let i=ind;i<last;i++){
          temp+=arr[i]
      }
      return temp
  }
  let arr = []
  let leftSum = 0
  let rightSum = 0
  for(let i=0;i<nums.length;i++){
      if(i==0){
          rightSum = sumFn(nums,i+1,nums.length)
          arr.push(rightSum)
      } else{
          leftSum = sumFn(nums,0,i)
          rightSum = sumFn(nums,i+1,nums.length)
          arr.push(Math.abs(leftSum-rightSum))
      }
  }
  return arr;
};

console.log(leftRightDifference(nums))