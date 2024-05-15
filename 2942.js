
// 2942. Find Words Containing Character

// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

var words = ["leet","code"], x = "e";

var findWordsContaining = function(words, x) {
  var arr= [];
  for(let i=0;i<words.length;i++){
      var temp=words[i];
      for(let j=0;j<temp.length;j++){
          if(temp[j]==x){
          arr.push(i);
          break;
          }
      }
  }
  return arr;
};

console.log(findWordsContaining(words,x))