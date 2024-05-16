
// 521. Longest Uncommon Subsequence I

// Given two strings a and b, return the length of the longest uncommon 
// subsequence between a and b. If no such uncommon subsequence exists, return -1.

// An uncommon subsequence between two strings is a string that is a 
// subsequence
//  of exactly one of them.

var a = "aba", b = "cdc";

var findLUSlength = function (a, b) {
  let str1 = a.length;
  let str2 = b.length;
  var large = Math.max(str1, str2);
  var count = 0;
  if (a != b) {
      count++
  }

  if (count == 0) {
      return -1
  } else {
      return large;
  }
};

console.log(findLUSlength(a,b))