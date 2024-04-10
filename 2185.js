
// 2185. Counting Words With a Given Prefix

// You are given an array of strings words and a string pref.

// Return the number of strings in words that contain pref as a prefix.

// A prefix of a string s is any leading contiguous substring of s.

var words = ["pay","attention","practice","attend"], pref = "at";

var prefixCount = function(words, pref) {
  let c=0;
  for(let i=0;i<words.length;i++){
      let newWord=words[i].slice(0,pref.length);
      if(pref===newWord){
          c++;
      }
  }
  return c;
};

console.log(prefixCount(words,pref))