
// 2544. Alternating Digit Sum

// You are given a positive integer n. Each digit of n has a sign according 
// to the following rules:

// The most significant digit is assigned a positive sign.
// Each other digit has an opposite sign to its adjacent digits.
// Return the sum of all digits with their corresponding sign.

var n = 886996;

var alternateDigitSum = function(n) {
  var str = n+"";
  str = str.split("");
  let sum = 0;
  for(let i=0;i<str.length;i++){
      if(i%2==0){
          sum= sum+Number(str[i])
      }else{
          sum = sum-Number(str[i])
      }
  }
  return sum;
};

console.log(alternateDigitSum(n))