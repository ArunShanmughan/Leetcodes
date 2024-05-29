
// 2000. Reverse Prefix of Word

// Given a 0-indexed string word and a character ch, 
// reverse the segment of word that starts at index 0 and ends at the index of 
// the first occurrence of ch (inclusive). If the character ch does not exist in word, 
// do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment 
// that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".

// Return the resulting string.

var word = "abcdefd", ch = "d";

var reversePrefix = function(word, ch) {
  var chIndex = word.indexOf(ch);
  word = word.split("")
  var str = word.splice(0,(chIndex+1));
  str = str.reverse();
  word.unshift(...str);
  return word.join("")
};

console.log(reversePrefix(word,ch))