

// 1624. Largest Substring Between Two Equal Characters

// Given a string s, return the length of the longest substring between two equal characters, 
// excluding the two characters. If there is no such substring return -1.

// A substring is a contiguous sequence of characters within a string.

var s = "mgntdygtxrvxjnwksqhxuxtrv"

function maxLengthBetweenEqualCharacters(s){
  let arr = []
  for(let i=0;i<s.length;i++){
    let count = 0;
    for(let j=i+1;j<s.length;j++){
      if(s[i]==s[j]){
        count = j-i
      }
    }
    arr.push(count-1)
  }
  return Math.max(...arr)
}

console.log(maxLengthBetweenEqualCharacters(s))