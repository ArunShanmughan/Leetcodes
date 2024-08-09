

// 3174. Clear Digits

// You are given a string s.

// Your task is to remove all digits by doing this operation repeatedly:

// Delete the first digit and the closest non-digit character to its left.
// Return the resulting string after removing all digits.

var s = "abc"

var clearDigits = function(s) {
  let str = s.split("")
  for(let i=0;i<str.length;i++){
      if(!isNaN(str[i])){
          str.splice(i-1,2)
          i=-1
      }
  }
  return str.join("")
};

console.log(clearDigits(s))