

// 1304. Find N Unique Integers Sum up to Zero

// Given an integer n, return any array containing n unique integers such that they add up to 0.

var n = 25

var sumZero = function (n) {
  let mid = Math.floor(n / 2)
  // console.log(mid)
  let arr = []
  for (let i = 1; i <=mid; i++) {
      arr.push(-i, i)
  }
  // console.log(arr)
  if (n % 2 != 0) {
      arr.push(0)
  }
  return arr;
}

console.log(sumZero(n))