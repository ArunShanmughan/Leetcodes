
// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

var s = "abcabcbb";

var lengthOfLongestSubstring = function(s) {
  let arr = [];
  let leng = 0;

  for(let i=0;i<s.length;i++){
      if(arr.includes(s[i])){
          if(leng<arr.length) {
              leng = arr.length
          }
          let temp = arr.indexOf(s[i])
          arr.splice(0,temp+1);
      }
      arr.push(s[i]);
  }
  if(leng<arr.length){
      return arr.length
  }else{
      return leng
  }
};

console.log(lengthOfLongestSubstring(s))