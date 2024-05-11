
// 507. Perfect Number

// A perfect number is a positive integer that is equal to the sum of its 
// positive divisors, excluding the number itself. A divisor of an integer x is an 
// integer that can divide x evenly.

// Given an integer n, return true if n is a perfect number, otherwise return false.

var num = 120

var checkPerfectNumber = function(num) {
  var arr = []
  if(num==1) return false
  for(let i=1;i<num;i++){
      if(num%i==0){
          arr.push(i)
      }
  }
  var sum = 0;
  for(let i=0;i<arr.length;i++){
      sum+=arr[i]
  }
  if(sum==num){
      return true
  }else{
      return false
  }
};

console.log(checkPerfectNumber(num))