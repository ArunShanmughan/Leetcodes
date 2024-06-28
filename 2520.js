
// 2520. Count the Digits That Divide a Number

// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.

var num = 1248;

var countDigits = function (num) {
  var str = num + "";

  str = str.split("");
  var count = 0;
  for (let i = 0; i < str.length; i++) {
      if (num % Number(str[i]) == 0) {
          count++
      }
  }

  return count;
};

console.log(countDigits(num))