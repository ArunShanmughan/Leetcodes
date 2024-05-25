
// 1758. Minimum Changes To Make Alternating Binary String

// You are given a string s consisting only of the characters '0' 
// and '1'. In one operation, you can change any '0' to '1' or vice versa.

// The string is called alternating if no two adjacent characters are equal. 
// For example, the string "010" is alternating, while the string "0100" is not.

// Return the minimum number of operations needed to make s alternating.

var s ="110010";

var minOperations = function(s) {
  var first = 0;
  var second = 0;
  for(let i=0;i<s.length;i++){
      if((s[i]=="1")==(i%2==0)){
          first+=1
      }else{
          second+=1
      }
  }
  return Math.min(first,second);
};

console.log(minOperations(s));