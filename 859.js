
// 859. Buddy Strings

// Given two strings s and goal, return true if you can swap two letters in 
// s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) 
// such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

var s = "aaaaaaabc" , goal = "aaaaaaacb";

var buddyStrings = function(s, goal) {
  if(s.length!=goal.length){
      return false;
  }
  let arr = []
  for(let i=0;i<goal.length;i++){
      if(s[i]!=goal[i]){
          arr.push(i)
      }
      if(arr.length>2){
          return false
      }
  }

  if(!arr.length){
      return s.length != [...new Set(s)].length;
  }
  return s[arr[0]]==goal[arr[1]] && s[arr[1]]==goal[arr[0]]
};

console.log(buddyStrings(s,goal))