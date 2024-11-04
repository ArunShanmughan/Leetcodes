

// 852. Peak Index in a Mountain Array

// You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

// Return the index of the peak element.

// Your task is to solve it in O(log(n)) time complexity.

var arr = [0,10,5,2];

var peakIndexInMountainArray = function(arr) {
  // let large = 0
  // let ind = 0
  // for(let i=0;i<arr.length;i++){
  //     if(large<arr[i]){
  //         large = arr[i]
  //         ind = i
  //     }
  // }
  // return ind;
  let low = 0;
  let high = arr.length - 1;
  
  while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if ((mid === 0 || arr[mid] >= arr[mid - 1]) &&
          (mid === arr.length - 1 || arr[mid] >= arr[mid + 1])) {
          return mid;
      }
      if (arr[mid] < arr[mid + 1]) {
          low = mid + 1;
      } else {
          high = mid - 1;
      }
  }
  return low;
};

console.log(peakIndexInMountainArray(arr))