
// 3146. Permutation Difference between Two Strings

// You are given two strings s and t such that every character occurs at most 
// once in s and t is a permutation of s.

// The permutation difference between s and t is defined as 
// the sum of the absolute difference between the index of the occurrence of each character 
// in s and the index of the occurrence of the same character in t.

// Return the permutation difference between s and t.

var s = "abc", t = "bac";

var findPermutationDifference = function(s, t) {
  var sum = 0;
  for(let i=0;i<s.length;i++){
      for(let j=0;j<t.length;j++){
          if(s[i]==t[j]){
              sum+=Math.abs(i-j);
          }
      }
  }
  return sum;
};

console.log(findPermutationDifference(s,t))