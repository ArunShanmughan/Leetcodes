

// 2053. Kth Distinct String in an Array

// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct 
// string present in arr. If there are fewer than k distinct strings, return 
// an empty string "".

// Note that the strings are considered in the order in which they appear in the array.

var arr = ["d","b","c","b","c","a"], k = 2

var kthDistinct = function (arr, k) {
  let unique = [...new Set(arr)]
  let distinct = []
  for (let i = 0; i < unique.length; i++) {
      let count = 0
      for (let j = 0; j < arr.length; j++) {
          if (unique[i] === arr[j]) {
              count++
          }
      }
      if (count == 1) {
          distinct.push(unique[i])
      }
  }
  if(distinct.length>=k){
      return distinct[k-1]
  }else{
      return ""
  }

};

console.log(kthDistinct(arr,k))