
// 1342. Number of Steps to Reduce a Number to Zero

// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, 
// otherwise, you have to subtract 1 from it.

var num = 123;

var numberOfSteps = function(num) {
  let count = 0
  while(num!==0){
      if(num%2==0){
          count++
          num = num/2
      }else{
          count++
          num = num-1
      }
  }
  return count;
};

console.log(numberOfSteps(num))