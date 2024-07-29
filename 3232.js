

// 3232. Find if Digit Game Can Be Won

// You are given an array of positive integers nums.

// Alice and Bob are playing a game. In the game, Alice can choose either all 
// single-digit numbers or all double-digit numbers from nums, and the rest of 
// the numbers are given to Bob. Alice wins if the sum of her numbers is 
// strictly greater than the sum of Bob's numbers.

// Return true if Alice can win this game, otherwise, return false.

var  nums = [1,2,3,4,5,14];

var canAliceWin = function(nums) {
  let singleSum = 0;
  let doubleSum = 0;
  for(let i=0;i<nums.length;i++){
      if(nums[i]<10){
          singleSum+=nums[i]
      }else{
          doubleSum+=nums[i]
      }
  }
  if(doubleSum==singleSum){
      return false
  }else{
      return true
  }
};

console.log(canAliceWin(nums))