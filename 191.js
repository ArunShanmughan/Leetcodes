
// 191. Number of 1 Bits

// Given a positive integer n, write a function that returns the number of 
// set bits
//  in its binary representation (also known as the Hamming weight).

var n = 128

var hammingWeight = function(n) {
  let curr = n.toString(2)
  let count = 0
  for(let i=0;i<curr.length;i++){
      if(curr[i]=="1"){
          count++
      }
  }
  return count;
};

console.log(hammingWeight(n))