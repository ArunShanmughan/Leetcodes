
// // 1816. Truncate Sentence

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
//  Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that 
// it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

var s = "What is the solution to this problem", k = 4

var truncateSentence = function(s, k) {
  var arr = s.split(' ');
var newarr = [];
var tempcount = 0

  for(let i=0;i<arr.length;i++){
      if(i<k){
          newarr.push(arr[i]);
      }
  }
  var count = 0
  for(let i=0;i<newarr.length;i++){
      count++
      let value = newarr[i]
      for(let j=0;j<value.length;j++){
          tempcount++
      }
  }
  return s.substring(0,(tempcount+count)).trim()
};

console.log(truncateSentence(s,k));