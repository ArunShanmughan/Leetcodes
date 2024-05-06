
// 3110. Score of a String

// You are given a string s. The score of a string is defined as the sum of the 
// absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

var s ="zaz";


var scoreOfString = function(s) {
  let arr = s.split("");
  var res = []
  for(let i=0;i<arr.length;i++){
      res.push(arr[i].charCodeAt())
  }
  var ans = 0;
  var temp = 0
  for(let i=1;i<res.length;i++){
     temp = Math.abs(res[i]-res[i-1]);
     ans += temp;
      }
  return ans;

  // var ans = 0;

  // for(let i=1;i<s.length;i++){
  //     ans += Math.abs((s.charCodeAt(i))-(s.charCodeAt(i-1)))
  // }
  // return ans;
};

console.log(scoreOfString(s))