
// 136. Single Number


// Given a non-empty array of integers nums, every element appears 
// twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity 
// and use only constant extra space.

var nums = [4,1,2,1,2];

var singleNumber = function(nums) {

  //first method
  // let count = {}
  // for (i = 0; i < nums.length; i++) {
  //     if (count.hasOwnProperty(nums[i])) {
  //         count[nums[i]]++;
  //     } else {
  //         count[nums[i]] = 1;
  //     }
  // }

  // for (let key in count) {
  //     if (count[key] === 1) {
  //         return key;
  //     }
  // }

  //second method
  let unique = [...new Set(nums)]

  for(let i=0;i<unique.length;i++){
      let count = 0
      for(let j=0;j<nums.length;j++){
          if(nums[j]==unique[i]){
              count++
          }
      }
      if(count<2){
          return unique[i]
      }
  }
};

console.log(singleNumber(nums))