
// 1346. Check If N and Its Double Exist

// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

var arr = [-2,0,10,-19,4,6,-8];

var checkIfExist = function(arr) {
  for(let i=0;i<arr.length;i++){
      let temp = arr[i]*2
      if(arr.includes(temp)&&i!=arr.indexOf(temp)){
          return true
      }
  }
  return false
};

console.log(checkIfExist(arr))