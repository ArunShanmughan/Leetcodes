
// 1374. Generate a String With Characters That Have Odd Counts

// Given an integer n, return a string with n characters such that each character 
// in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are 
// multiples valid strings, return any of them.  

var n = 7;

var generateTheString = function (n) {
  var matchedChars = [];
  let long = 0
  let flag = 0
  if (n % 2 == 0) {
      long = n - 1;
      flag = 1
  } else {
      long = n
      flag = 2
  }
  let str = ""
  for (let i = 0; i < long; i++) {
      str += "i"
  }

  if (flag == 1) {
      return str+"k"
  } else if (flag == 2) {
      return str
  }
};

console.log(generateTheString(n))