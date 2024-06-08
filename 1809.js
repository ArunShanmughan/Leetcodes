
// 1089. Duplicate Zeros;

// Given a fixed-length integer array arr, duplicate each occurrence of zero, 
// shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. 
// Do the above modifications to the input array in place and do not return anything.

var arr = [1,0,2,3,0,4,5,0];

var duplicateZeros = function(arr) {
  var long = arr.length;
  for(let i=0;i<arr.length;i++){
      if(arr[i]==0){
          arr.splice(i,0,0);
          arr.slice(arr.length,1);
          i++;
      }
  }
  let samp;
  if(arr.length==long){
      return arr;
  }else{
      samp = arr.splice(long,arr.length)
      return arr;
  }
};

console.log(duplicateZeros(arr))