
// 500. Keyboard Row

// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

var words = ["Hello","Alaska","Dad","Peace"];

var findWords = function(words) {
  let arr1 = ["Q","W","E","R","T","Y","U","I","O","P"]
  let arr2 = ["A","S","D","F","G","H","J","K","L"]
  let arr3 = ["Z","X","C","V","B","N","M"]
  let res = []
  for(let i=0;i<words.length;i++){
      let curr = words[i]
      let count1 = 0
      let count2 = 0
      let count3 = 0
      for(let j=0;j<curr.length;j++){
          if(arr1.includes(curr[j].toUpperCase())){
              count1++
          }else if(arr2.includes(curr[j].toUpperCase())){
              count2++
          }else if(arr3.includes(curr[j].toUpperCase())){
              count3++
          }
      }
      if(count1==curr.length||count2==curr.length||count3==curr.length){
          res.push(curr)
      }
  }
  return res;
};

console.log(findWords(words))