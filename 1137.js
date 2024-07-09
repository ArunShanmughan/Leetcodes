
// 1137. N-th Tribonacci Number

// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

var n = 25

var tribonacci = function (n) {
  if (n == 0) {
      return 0
  }
  if (n < 3) {
      return 1
  }
  let a = 0
  let b = 1
  let c = 1
  for (let i = 3; i <= n; i++) {
      let temp = a + b + c
      a = b
      b = c
      c = temp;
  }
  return c;
};

console.log(tribonacci(n))