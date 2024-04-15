
// 2586. Count the Number of Vowel Strings in Range

// You are given a 0-indexed array of string words and two integers left and right.

// A string is called a vowel string if it starts with a vowel character and ends 
// with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

// Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

var words = ["are","amy","u"], left = 0, right = 2

var vowelStrings = function(words, left, right) {
  var regex = /[aeiou]/;
  var count = 0
  for(let i=left;i<=right;i++){
      let temp = words[i];
      let dis = words[i].length-1;
      if(regex.test(temp[0])&&regex.test(temp[dis])){
          count++
      }
}
  return count;
};
console.log(vowelStrings(words,left,right))