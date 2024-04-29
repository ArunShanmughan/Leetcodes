// 2180. Count Integers With Even Digit Sum

// Given a positive integer num, return the number of positive integers
// less than or equal to num whose digit sums are even.
// The digit sum of a positive integer is the sum of all its digits.

var num = 4;

var countEven = function (num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    let n = i;
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    if (sum % 2 === 0) {
      count++;
    }
  }
  return count;
};

console.log(countEven(num));
