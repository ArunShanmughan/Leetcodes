

// 1684. Count the Number of Consistent Strings

// you are given a string allowed consisting of distinct characters and an array 
// of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words

var allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"];

var countConsistentStrings = function(allowed, words) {
  let count = 0
  let arr = []
  for(let i=0;i<words.length;i++){
      let curr = words[i]
      for(let j=0;j<curr.length;j++){
          if(allowed.includes(curr[j])){
              count++
          }else{
              count = 0
              break;
          }
      }
      if(count!=0){
          arr.push(words[i])
          count = 0
      }
  }
  return arr.length
};

console.log(countConsistentStrings(allowed,words))