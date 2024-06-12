
// 43. Multiply Strings

// Given two non-negative integers num1 and num2 represented as strings, 
// return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the 
// inputs to integer directly.

var num1 = "123", num2 = "456";

var multiply = function(num1, num2) {
  let result = BigInt(num1) * BigInt(num2);
  return String(result);
};

console.log(multiply(num1,num2))