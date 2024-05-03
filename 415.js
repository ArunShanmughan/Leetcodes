
// 415. Add Strings

// Given two non-negative integers, num1 and num2 represented as string,
// return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in 
// library for handling large integers (such as BigInteger). 
// You must also not convert the inputs to integers directly.

var num1 = "11", num2 = "123"


var addStrings = function(num1, num2) {
  var ans  = BigInt(num1)+BigInt(num2)
  return ans.toString()
};

console.log(addStrings(num1,num2));