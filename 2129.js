
// 2129. Capitalize the Title

// You are given a string title consisting of one or more words separated by a 
// single space, where each word consists of English letters. 
// Capitalize the string by changing the capitalization of each word such that:

// If the length of the word is 1 or 2 letters, change all letters to lowercase.
// Otherwise, change the first letter to uppercase and the remaining letters to 
// lowercase.
// Return the capitalized title.

var title = "First leTTeR of EACH Word";

var capitalizeTitle = function (title) {
  var ans = title.toLowerCase().split(" ");

  for (let i = 0; i < ans.length; i++) {
      if(ans[i].length>2){
      ans[i] = ans[i][0].toUpperCase() + ans[i].slice(1);
      }
  }

  return ans.join(" ")
};

console.log(capitalizeTitle(title))