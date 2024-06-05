
// 1004. Max Consecutive Ones III

// Given a binary array nums and an integer k, 
// return the maximum number of consecutive 
// 1's in the array if you can flip at most k 0's.

var nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2;

var longestOnes = function(nums, k) {
  var max= 0;
  var zeros = 0
  var j = 0
  for(let i=0;i<nums.length;i++){
      if(nums[i]==0){
          zeros+=1
      }

      while(zeros>k){
          if(nums[j]==0){
              zeros-=1
          }
          j+=1
      }
      let temp = (i-j+1)
       max = Math.max(max,temp)
  }
  return max;
};

console.log(longestOnes(nums,k))