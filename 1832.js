
// 1832. Check if the Sentence Is Pangram

// A pangram is a sentence where every letter of the English alphabet 
// appears at least once.

// Given a string sentence containing only lowercase English letters, 
// return true if sentence is a pangram, or false otherwise.

var sentence = "thequickbrownfoxjumpsoverthelazydog";

var checkIfPangram = function(sentence) {
  let alpha = "abcdefghijklmnopqrstuvwxyz"

  for(let i=0;i<alpha.length;i++){
      if(!sentence.includes(alpha[i])){
          return false
          break;
      }
  }
  return true
};

console.log(checkIfPangram(sentence))