
// 1317. Convert Integer to the Sum of Two No-Zero Integers

// No-Zero integer is a positive integer that does not contain any 0 
// in its decimal representation.

// Given an integer n, return a list of two integers [a, b] where:

// a and b are No-Zero integers.
// a + b = n
// The test cases are generated so that there is at least one valid solution. 
// If there are many valid solutions, you can return any of them.

var n = 11;

var getNoZeroIntegers = function (n) {
  let arr = []
  let flag = 0
  for (let i = 1; i < n; i++) {
      for (let j = 1; j < n; j++) {
          if (i + j == n) {
              let one = i + ""
              let two = j + ""
              if (!one.includes("0") && !two.includes("0")) {
                  arr.push(i, j)
                  flag = 1
                  break;
              }
          }
      }
      if (flag == 1) {
          break;
      }
  }
  return arr;
};

console.log(getNoZeroIntegers(n))