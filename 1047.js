

// 1047. Remove All Adjacent Duplicates In String

// You are given a string s consisting of lowercase English letters.
//  A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

var s = "abbaca"

var removeDuplicates = function(s) {
  let arr = []
  for(let i=0;i<s.length;i++){
      if(arr.length>0&&arr[arr.length-1]==s[i]){
          arr.pop()
      }else{
          arr.push(s[i])
      }
  }
  return arr.join('')
};

console.log(removeDuplicates(s))