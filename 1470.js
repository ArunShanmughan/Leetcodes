
// 1470. Shuffle the Array

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

var nums = [2,5,1,3,4,7], n = 3;

var shuffle = function(nums, n) {
  var long = (nums.length-1)/2;
  var arr1 =  [];
  for(let i=0;i<long;i++){
          arr1.push(nums[i]);
          arr1.push(nums[i+n]);
  }
  return arr1;
};

console.log(shuffle(nums,n))