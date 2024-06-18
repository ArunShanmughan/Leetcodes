
// 1281. Subtract the Product and Sum of Digits of an Integer

// Given an integer number n, return the difference between the 
// product of its digits and the sum of its digits.

var n = 4421;

var subtractProductAndSum = function(n) {
  let str = n+"";
  let arr = str.split("");
  let add = 0;
  let mul = 1;
  for(let i=0;i<arr.length;i++){
      let temp = Number(arr[i])
      add+=Number(arr[i]);
      mul = mul * temp;
  }
  return mul - add;
};

console.log(subtractProductAndSum(n))