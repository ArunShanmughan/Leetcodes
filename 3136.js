
// 3136. Valid Word

// A word is considered valid if:

// It contains a minimum of 3 characters.
// It contains only digits (0-9), and English letters (uppercase and lowercase).
// It includes at least one vowel.
// It includes at least one consonant.
// You are given a string word.

// Return true if word is valid, otherwise, return false.

// Notes:

// 'a', 'e', 'i', 'o', 'u', and their uppercases are vowels.
// A consonant is an English letter that is not a vowel.

var word = "234Adas";

var isValid = function (word) {
  if (word.length > 2&& !/\W/.test(word)&& /[aeiouAEIOU]/.test(word)&& /[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]/.test(word)){    
  return true;
  }
  return false;
};

console.log(isValid(word))