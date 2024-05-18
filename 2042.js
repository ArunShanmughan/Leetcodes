
// 2042. Check if Numbers Are Ascending in a Sentence

// A sentence is a list of tokens separated by a single space with no leading 
// or trailing spaces. Every token is either a positive number consisting of digits 
// 0-9 with no leading zeros, or a word consisting of lowercase English letters.

// For example, "a puppy has 2 eyes 4 legs" is a sentence with seven tokens: 
// "2" and "4" are numbers and the other tokens such as "puppy" are words.
// Given a string s representing a sentence, you need to check if all the numbers 
// in s are strictly increasing from left to right (i.e., other than the last number, 
//   each number is strictly smaller than the number on its right in s).

// Return true if so, or false otherwise.

var s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles";

var areNumbersAscending = function (s) {
  var reg = /[a-z]/;
  var res = s.split(" ")
  var str = []
  var arr = []
  for (let i = 0; i < res.length; i++) {
      if (reg.test(res[i])) {
          str.push(res[i])
      } else {
          arr.push(Number(res[i]))
      }
  }
  var count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
          count++
      }
  }
  if (count == arr.length - 1) {
      return true
  } else {
      return false
  }
};

console.log(areNumbersAscending(s))