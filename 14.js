
// 14. Longest Common Prefix

// Write a function to find the longest common prefix 
// string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var strs = ["flower","flow","flight"];

var longestCommonPrefix = function(strs) {
  var same = strs[0];
  var temp = "";
  for(let i=0;i<strs.length;i++){
      for(let j=0;j<same.length;j++){
          if(same[j]==strs[i][j]){
              temp=temp+same[j];
          }else{
              break;
          }
      }
      same = temp;
      temp = "";
  }

  return same;
};

console.log(longestCommonPrefix(strs))