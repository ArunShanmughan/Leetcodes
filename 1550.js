
// 1550. Three Consecutive Odds

// Given an integer array arr, return true if there are three 
// consecutive odd numbers in the array. Otherwise, return false.

var arr = [1,2,34,3,4,5,7,23,12];

var threeConsecutiveOdds = function(arr) {
  for(let i=0;i<arr.length;i++){
      if(arr[i]%2==1&&arr[i+1]%2==1&&arr[i+2]%2==1){
          return true
      }
  }
  return false
};

console.log(threeConsecutiveOdds(arr))