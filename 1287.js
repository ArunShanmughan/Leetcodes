
// 1287. Element Appearing More Than 25% In Sorted Array

// Given an integer array sorted in non-decreasing order, there is exactly one 
// integer in the array that occurs more than 25% of the time, return that integer.

var arr = [1,2,2,6,6,6,6,7,10];

var findSpecialInteger = function(arr) {
  let unique = [...new Set(arr)]
  let ans = []
  for(let i=0;i<unique.length;i++){
   let count = 0
   for(let j=0;j<arr.length;j++){
       if(unique[i]==arr[j]){
           count++
       }
   }
   ans.push(count);
  }
  let large = Math.max(...ans)
  return unique[ans.indexOf(large)]
};

console.log(findSpecialInteger(arr))