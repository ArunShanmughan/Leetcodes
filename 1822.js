
// 1822. Sign of the Product of an Array

// There is a function signFunc(x) that returns:

// * 1 if x is positive.
// * -1 if x is negative.
// * 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).

var nums = [-1,-2,-3,-4,3,2,1];

var arraySign = function(nums) {
  var product = nums[0]
  for(let i=1;i<nums.length;i++){
      product=nums[i]*product;
  }
  function signFunc(x){
      if(x>0){
          return 1
      }else if(x<0){
          return -1
      }else{
          return 0
      }
  }
  return signFunc(product)
};

console.log(arraySign(nums))
