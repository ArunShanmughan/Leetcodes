
// 2264. Largest 3-Same-Digit Number in String

// You are given a string num representing a large integer. An integer is good if it meets the following conditions:

// It is a substring of num with length 3.
// It consists of only one unique digit.
// Return the maximum good integer as a string or an empty string "" if no such integer exists.

// Note:

// A substring is a contiguous sequence of characters within a string.
// There may be leading zeroes in num or a good integer.

var num = "6777133339"


var largestGoodInteger = function(num) {
  let i = 0;
  let j = 1;
  let c = 2;  
  let res = ""
  while (c < num.length) {
      if (num[i] === num[j] && num[j] === num[c]) {
          let strg = num[i] + num[j] + num[c];
          if(strg > res){
              res = strg;
          }
      }
      i++;
      j++;
      c++
  }
  return res;

};

console.log(largestGoodInteger(num))