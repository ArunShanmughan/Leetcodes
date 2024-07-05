
// 728. Self Dividing Numbers

// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

var left = 47, right = 85;

var selfDividingNumbers = function (left, right) {
  let arr = []
for(let i=left;i<=right;i++){
  let curr = i+""
  curr.split("")
  let long = curr.length
  let count = 0
  for(let j=0;j<curr.length;j++){
      if(i%Number(curr[j])==0){
          count++
      }
  }
  if(count==long){
      arr.push(i)
  }
} 
return arr; 
};

console.log(selfDividingNumbers(left,right))