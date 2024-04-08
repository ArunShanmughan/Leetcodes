
// 509. Fibonacci Number

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
//  such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

var n = 2;

var fib = function(n) {
  if(n==0||n==1){
      return n
  }
  let pr2=0;
  let pr1=1;
  let curr=0;

  for(let i=2;i<=n;i++){
      curr=pr2+pr1;
      pr2=pr1;
      pr1=curr;
  }
  return curr

}

console.log(fib(n))