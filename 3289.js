

// 3289. The Two Sneaky Numbers of Digitville

// In the town of Digitville, there was a list of numbers called nums containing 
// integers from 0 to n - 1. Each number was supposed to appear exactly once in the list, 
// however, two mischievous numbers sneaked in an additional time, making the list longer than usual.

// As the town detective, your task is to find these two sneaky numbers. Return an array of 
// size two containing the two numbers (in any order), so peace can return to Digitville.

var nums = [7,1,5,4,3,4,6,0,9,5,8,2];

var getSneakyNumbers = function(nums) {
  let freq = {}
  let repeated = []
  for(let num of nums){
      if(freq[num]){
          freq[num]++
          if(!repeated.includes(num)){
              repeated.push(num)
          }
      }else{
          freq[num] = 1
      }
  }
  return repeated;
};

console.log(getSneakyNumbers(nums))