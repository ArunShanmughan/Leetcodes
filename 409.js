
// 409. Longest Palindrome

// Given a string s which consists of lowercase or uppercase letters, 
// return the length of the longest 
// palindrome
//  that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

var s = "abccccdd";

var longestPalindrome = function (s) {
  var str = s.split("");
  var count = {}

  for (let i = 0; i < str.length; i++) {
      let temp = str[i];
      if (count[temp]) {
          count[temp] += 1
      } else {
          count[temp] = 1;
      }
  }


  var length = 0;
  var oddFound = false;

  for (let key in count) {
      if (count[key] % 2 == 0) {
          length += count[key]
      } else {
          length += count[key] - 1
          oddFound = true
      }
  }

  if (oddFound) {
      length += 1
  }

  return length;
};

console.log(longestPalindrome(s))