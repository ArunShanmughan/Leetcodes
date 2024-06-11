

// 1122. Relative Sort Array

// Given two arrays arr1 and arr2, the elements of arr2 are distinct, 
// and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are 
// the same as in arr2. Elements that do not appear in arr2 should be placed at 
// the end of arr1 in ascending order.

var arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6];

var relativeSortArray = function (arr1, arr2) {
  var samp = [];
  var ans = [];

  for (let i = 0; i < arr2.length; i++) {
      for (let j = 0; j < arr1.length; j++) {
          if (arr2[i] === arr1[j]) {
              samp.push(arr1[j])
          }
      }
  }

  for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
          ans.push(arr1[i])
      }
  }

  ans.sort((a,b)=>a-b)
  return [...samp,...ans]
};

console.log(relativeSortArray(arr1,arr2))