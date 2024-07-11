
// 15. 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

var nums = [-1,0,1,2,-1,-4]

var threeSum = function(nums) {
  if(nums.length<3){
      return []
  }
  nums.sort((a,b)=>a-b)
  let arr = []

  for(let i=0;i<nums.length-2;i++){
      const val1 = nums[i]
      if(i>0&&nums[i]==nums[i-1]){
          continue;
      }
      let val2 = 0
      let val3 = 0

      let start= i+1
      let end = nums.length-1
      while(start!==end){
          val2 = nums[start]
          val3 = nums[end]

          if(val1+val2+val3==0){
              arr.push([val1,val2,val3])
              while(start<end){
                  start++
                  if(nums[start]!==nums[start-1]){
                      break;
                  }
              }
              while(end>start){
                  end--
                  if(nums[end]!==nums[end+1]){
                      break;
                  }
              }
          }else if(val1+val2+val3<0){
              start++
          }else if(val1+val2+val3>0){
              end--
          }
      }
  }
  return arr
};

console.log(threeSum(nums))