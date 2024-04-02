//POWER OF FOUR

// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

var a  = 16

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  while(n>1){
      n=n/4
  }
  return n===1
};


console.log(isPowerOfFour(a))
