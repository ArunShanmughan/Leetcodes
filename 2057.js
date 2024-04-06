
//2057. Smallest Index With Equal Value

//Given a 0-indexed integer array nums, return the smallest index i of nums such that
//  i mod 10 == nums[i], or -1 if such index does not exist.

// x mod y denotes the remainder when x is divided by y.

var nums = [0,1,2]

var smallestEqual = function(nums) {
  var arr = [];
  for(let i=0;i<nums.length;i++){
      if((i%10)==nums[i]){
          arr.push(i)
      }
  }
  if(arr[0]==undefined){
      return -1
  }else{
      return arr[0]
  }
};

console.log(smallestEqual(nums))