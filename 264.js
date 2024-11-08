

// 264. Ugly Number II

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return the nth ugly number.

let n = 15

var nthUglyNumber = function (n) {
  let uglyNumbers = [1];
  let p2 = 0, p3 = 0, p5 = 0

  for (let i = 1; i < n; i++) {
      const next2 = uglyNumbers[p2] * 2;
      const next3 = uglyNumbers[p3] * 3;
      const next5 = uglyNumbers[p5] * 5;

      const nextUgly = Math.min(next2, next3, next5);
      uglyNumbers.push(nextUgly);

      if (nextUgly === next2) p2++;
      if (nextUgly === next3) p3++;
      if (nextUgly === next5) p5++;
  }
  console.log(uglyNumbers)

  return uglyNumbers[n - 1]
};

console.log(nthUglyNumber(n))