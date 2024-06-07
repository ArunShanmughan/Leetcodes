
// 648. Replace Words

// In English, we have a concept called root, which can be followed by some other word to 
// form another longer word - let's call this word derivative. For example, when the root "help" 
// is followed by the word "ful", we can form a derivative "helpful".

// Given a dictionary consisting of many roots and a sentence consisting of words separated by 
// spaces, replace all the derivatives in the sentence with the root forming it. If a derivative 
// can be replaced by more than one root, replace it with the root that has the shortest length.

// Return the sentence after the replacement.

var dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs";

var replaceWords = function (dictionary, sentence) {
  var str = sentence.split(" ");

  dictionary.sort((a,b)=>a.length-b.length)
  for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < dictionary.length; j++) {
          if (str[i].startsWith(dictionary[j])) {
              str[i] = dictionary[j]
              break;
          }
      }
  }
  return str.join(" ");
}

console.log(replaceWords(dictionary,sentence))