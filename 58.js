
// 58. Length of Last Word


// Given a string s consisting of words and spaces, 
// return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

 

var s = "   fly me   to   the moon  "

var lengthOfLastWord = function(s) {
  var long = 0;
  var lastword = false;

  for(let i=s.length-1;i>=0;i--){
      if(s[i]!==" "){
          long++;
          lastword=true;
      }else if(lastword){
          break;
      }
  }
  return long;
};
console.log(lengthOfLastWord(s))