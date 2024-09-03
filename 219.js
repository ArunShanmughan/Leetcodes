
// 219. Contains Duplicate II

// Given an integer array nums and an integer k, return true 
// if there are two distinct indices i and j in the array such 
// that nums[i] == nums[j] and abs(i - j) <= k.

var nums = [1,2,3,1,2,3], k = 2;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // let arr = []
  // let temp = 1
  // for(let i=0;i<nums.length;i++){
  //     let count = 1;
  //     for(let j=i+1;j<nums.length;j++){
  //         if(nums[i]==nums[j]){
  //             count++
  //         }
  //         if(count>1){
  //             arr.push(temp)
  //             temp++
  //         }
  //     }
  // }
  // let large = Math.max(...arr);
  // if(large>k){
  //     return false
  // }else{
  //     return true
  // }
  // if(nums.length==1){
  //     return false;
  // }
  // for(let i=0;i<nums.length;i++){
  //     if(nums[i]>k){
  //         return false
  //         break;
  //     }
  // }
  // return true;

  // let unique = [...new Set(nums)];
  // let arr = []
  // if(unique.length>1&&nums.length!=1){
  // for(let i=0;i<unique.length;i++){
  // let count = 0
  //     for(let j=0;j<nums.length;j++){
  //         if(nums[j]==unique[i]){
  //             count++
  //         }
  //         if(count>=2){
  //             arr.push(nums[j])
  //             nums.splice(j,1)
  //             j--
  //             count-=1
  //         }
  //     }
  // }
  // let secondUnique = [...new Set(arr)]
  // if(secondUnique.length<=k){
  //     return true
  // }else{
  //     return false
  // }
  // }
  // return false;

  const indexMap = {};

  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (num in indexMap && (i - indexMap[num]) <= k) {
          return true;
      }
      indexMap[num] = i;
  }
  return false;
};

console.log(containsNearbyDuplicate(nums,k))