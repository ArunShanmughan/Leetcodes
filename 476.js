
// 476. Number Complement

// The complement of an integer is the integer you get when 
// you flip all the 0's to 1's and all the 1's to 0's in its 
// binary representation.

// For example, The integer 5 is "101" in binary and its complement 
// is "010" which is the integer 2.
// Given an integer num, return its complement.


var num = 25


var findComplement = function (num) {
  let ans = num.toString(2)
  let arr = []
  for (let i = 0; i < ans.length; i++) {
      if (ans[i] == '0') {
          arr.push("1")
      } else {
          arr.push("0")
      }
  }
  let res = arr.join("")
  return parseInt(res,2)
};

console.log(findComplement(num))