

// 386. Lexicographical Numbers

// Given an integer n, return all the numbers in the 
// range [1, n] sorted in lexicographical order.

// You must write an algorithm that runs in O(n) time 
// and uses O(1) extra space. 

var n = 13;

var lexicalOrder = function(n) {
  let arr = []
  for(let i=1;i<=n;i++){
      arr.push(i)
  }
  arr.sort()
  return arr;
};

console.log(lexicalOrder(n))