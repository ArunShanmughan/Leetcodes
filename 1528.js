
// 1528. Shuffle String

// You are given a string s and an integer array indices of the same length. 
// The string s will be shuffled such that the character at the ith position moves 
// to indices[i] in the shuffled string.

// Return the shuffled string.

var s = "codeleet", indices = [4,5,6,7,0,2,1,3];

var restoreString = function(s, indices) {
  let arr = []
  for(let i=0;i<indices.length;i++){
      let ans = indices[i]
      arr[ans]=s[i];
  }
  return arr.join('')
};

console.log(restoreString(s,indices))