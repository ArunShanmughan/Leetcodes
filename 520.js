
// 520. Detect Capital

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

var word = "FlaG";

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  //---First Method---

  // var caps = word.toUpperCase();
  // var small = word.toLowerCase();

  // var str = word[0]+word.substring(1).toLowerCase();

  // if(word==caps||word==small||word==str){
  //     return true
  // }

  // return false;

  //------Second method----

  const allUpper = /^[A-Z]+$/.test(word);
  const allLower = /^[a-z]+$/.test(word);
  const firstUpper = /^[A-Z][a-z]+$/.test(word);
  if(allUpper || allLower || firstUpper){
    return true
  }else{
  return false;
  }
};
console.log(detectCapitalUse(word))