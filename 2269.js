
// 2269. Find the K-Beauty of a Number

// The k-beauty of an integer num is defined as the number of 
// substrings of num when it is read as a string that meet the following conditions:

// It has a length of k.
// It is a divisor of num.
// Given integers num and k, return the k-beauty of num.

// Note:

// Leading zeros are allowed.
// 0 is not a divisor of any value.
// A substring is a contiguous sequence of characters in a string.

var num = 430043, k = 2;

var divisorSubstrings = function (num, k) {
  let str = num.toString()
  let count = 0
  for (let i = 0; i <= str.length - k; i++) {
      let sub = str.substring(i, i + k)
      if (Number(sub) !== 0 && num % Number(sub) == 0) {
          count++
      }
  }
  return count;
};

console.log(divisorSubstrings(num,k))