
// 9. Palindrome Number


// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

var x = 121;

var isPalindrome = function(x) {
  x=x.toString();
  var leng = x.length;
  for(let i=0;i<leng;i++){
      if(x[i]!=x[leng-1]){
          return false;
      }
      leng--;
  }
  return true;
};

console.log(isPalindrome(x))