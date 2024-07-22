
// 151. Reverse Words in a String

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. 
// The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated 
// by a single space.

// Note that s may contain leading or trailing spaces or multiple 
// spaces between two words. The returned string should only have 
// a single space separating the words. Do not include any extra spaces.

var s = "a good   example";

var reverseWords = function(s) {
  let splits = s.split(" ").filter(word=>word.length>0);
  let stack = []
  for(let i of splits){
      stack.push(i)
  }

  let str = ""
  while(stack.length){
      let temp = stack.pop()
      str+= temp+" "
  }
  return str.trim();
};

console.log(reverseWords(s))