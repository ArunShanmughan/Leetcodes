
// 762. Prime Number of Set Bits in Binary Representation

// Given two integers left and right, return the count of numbers in 
// the inclusive range [left, right] having a prime number of set bits 
// in their binary representation.

// Recall that the number of set bits an integer has is the number of 
// 1's present when written in binary.

// For example, 21 written in binary is 10101, which has 3 set bits.

var left = 10, right = 15;

var countPrimeSetBits = function(left, right) {
  let total = 0
  for(let i=left;i<=right;i++){
      let binary = i.toString(2).split("1").length-1
      if(isPrime(binary)){
          total++
      }
  }
  return total
};

function isPrime(n){
if(n<2){
  return false;
}
if(n==2){
  return true
}
if(n%2==0){
  return false
}

for(let i=3;i<=Math.sqrt(n);i+=2){
  if(n%i==0){
    return false;
  }
}
return true;
}

console.log(countPrimeSetBits(left,right))