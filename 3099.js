
// 3099. Harshad Number

// An integer divisible by the sum of its digits is said to be a 
// Harshad number. You are given an integer x. Return the sum of 
// the digits of x if x is a Harshad number, otherwise, return -1.

var x = 23;

var sumOfTheDigitsOfHarshadNumber = function(x) {
  let str = x+"";
  str = str.split("");
  let sum = 0;
  for(let i=0;i<str.length;i++){
      sum += Number(str[i]);
  }
  if(x%sum==0){
      return sum;
  }else{
      return -1;
  }
};

console.log(sumOfTheDigitsOfHarshadNumber(x))