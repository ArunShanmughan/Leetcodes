

// 2485. Find the Pivot Integer

// Given a positive integer n, find the pivot integer x such that:

// The sum of all elements between 1 and x inclusively equals the 
// sum of all elements between x and n inclusively.
// Return the pivot integer x. If no such integer exists, return -1. 
// It is guaranteed that there will be at most one pivot index for the given input.

var n = 3

var pivotInteger = function (n) {
  let sum1 = 0
  let sum2 = 0
  let final = n*(n+1)/2
  for (let i = 1; i <= n; i++) {
     sum1+=i
     sum2 = final-sum1+i
     if(sum1===sum2){
      return i
     }
  }
  return -1
};

console.log(pivotInteger(n))