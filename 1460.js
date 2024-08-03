
// 1460. Make Two Arrays Equal by Reversing Subarrays

// You are given two integer arrays of equal length target and arr. 
// In one step, you can select any non-empty subarray of arr and reverse it. 
// You are allowed to make any number of steps.

// Return true if you can make arr equal to target or false otherwise.

var target = [3,7,9], arr = [3,7,11];

var canBeEqual = function(target, arr) {

  for(let i=0;i<arr.length;i++){
      if(!arr.length){
          return true
      }
      if(!target.includes(arr[i])){
          return false
      }
      let temp = target.indexOf(arr[i])
  }
  return true
};

console.log(canBeEqual(target,arr))