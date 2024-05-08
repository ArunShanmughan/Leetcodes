
// 557. Reverse Words in a String III

// Given a string s, reverse the order of characters in each word within
// a sentence while still preserving whitespace and initial word order.

var s = "Let's take LeetCode contest";


var reverseWords = function (s) {
  let count = s.split(" ");
  for (let i = 0; i < count.length; i++) {
      count[i] = count[i].split("").reverse().join("");
  }
  return count.join(" ");
};

console.log(reverseWords(s))