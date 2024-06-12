
// 69. Sqrt(x)

// Given a non-negative integer x, return the square root of x rounded 
// down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

var x = 8

var mySqrt = function(x) {
  var start = 0;
  var end = x;
  var result;
  while(start<=end){
      let mid = Math.floor((start+end)/2);
      if(mid*mid<=x){
          result=mid
          start = mid+1
      }else{
          end = mid-1
      }
  }
   return result;
};

console.log(mySqrt(x))