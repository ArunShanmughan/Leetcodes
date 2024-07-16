
// 1207. Unique Number of Occurrences

// Given an array of integers arr, return true if the number of occurrences of 
// each value in the array is unique or false otherwise.

var arr = [-3,0,1,-3,1,1,1,-3,10,0]

var uniqueOccurrences = function(arr) {
  // const countMap = new Map();
  // for (const num of arr) {
  //     countMap.set(num, (countMap.get(num) || 0) + 1);
  // }
  // const occurrences = Array.from(countMap.values());
  // const uniqueOccurrences = new Set(occurrences);
  // return occurrences.length === uniqueOccurrences.size;

  let arr2 = [...new Set(arr)]
  let matches = []
  for(let i=0;i<arr2.length;i++){
      let count =0;
      for(let j=0;j<arr.length;j++){
          if(arr2[i]==arr[j]){
              count++
          }
      }
      matches.push(count)
  }
  let check = [...new Set(matches)]

  if(check.length==matches.length){
      return true
  }else{
      return false
  }
};

console.log(uniqueOccurrences(arr))