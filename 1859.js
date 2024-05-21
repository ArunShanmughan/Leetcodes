
// 1859. Sorting the Sentence

// A sentence is a list of words that are separated by a single space 
// with no leading or trailing spaces. Each word consists of lowercase and 
// uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to 
// each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as 
// "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct 
// and return the original sentence.

var s = "Myself2 Me1 I4 and3";

var sortSentence = function (s) {
  var reg = /[A-Za-z]/
  var arr = []
  s = s.split(' ');
  console.log("this is S ->",s)
  let res = s.sort((a, b) => Number(a[a.length - 1]) - Number(b[b.length - 1]))
  console.log("This is res",res)
  for (let i = 0; i < res.length; i++) {
      let cur = res[i].split("")
      console.log(cur)
      arr[i] = ""
      for (let j = 0; j < cur.length; j++) {
          if (reg.test(cur[j])) {
              arr[i] += cur[j];
          }
          console.log(arr[i])
      }
  }
  return arr.join(' ')
};

console.log(sortSentence(s))