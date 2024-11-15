
// 461. Hamming Distance

// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

var x = 1, y = 4;

var hammingDistance = function (x, y) {
  let first = x.toString(2).padStart(32, 0)
  let second = y.toString(2).padStart(32, 0)
  let count = 0
  for (let i = 0; i < first.length; i++) {
      if (second[i] != first[i]) {
          count++
      }
  }
  return count;
};

console.log(hammingDistance(x,y))