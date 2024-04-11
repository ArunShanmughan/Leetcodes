
// 2278. Percentage of Letter in String

// Given a string s and a character letter, return the percentage of characters
// in s that equal letter rounded down to the nearest whole percent.


var s = "foobar", letter = "o"

var percentageLetter = function(s, letter) {
  var count = 0
  for(let i=0;i<s.length;i++){
      if(s[i]==letter){
          count++
      }
  }
  return Math.floor((count/s.length)*100)
}

console.log(percentageLetter(s,letter))