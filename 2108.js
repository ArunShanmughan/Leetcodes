
// 2108. Find First Palindromic String in the Array

// Given an array of strings words, return the first palindromic string in the array. 
// If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

var words = ["abc","car","ada","racecar","cool"];

var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
      let word = words[i].split("").reverse().join("")
      if (words[i] === word) {
          return word;

      }
  }
  return "";
};

console.log(firstPalindrome(words))