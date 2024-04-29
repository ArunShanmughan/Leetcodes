// 448. Find All Numbers Disappeared in an Array

// Given an array nums of n integers where nums[i] is in the range [1, n],
//  return an array of all the integers in the range [1, n] that do not appear in nums.

var nums = [4, 3, 2, 7, 8, 2, 3, 1];

var findDisappearedNumbers = function (nums) {
      var temp;
      for(let i=0;i<nums.length;i++){
      for(let j=i+1;j<nums.length;j++){
      if(nums[i]>nums[j]){
          temp=nums[i];
          nums[i]=nums[j];
          nums[j]=temp;
      }
      }
  }
      var count=1;
      var arr=[];
      for(let i=0;i<nums.length;i++){
          if(nums[i]===count&&nums[i]!=nums[i-1]){
              count++;
          }else if(nums[i]!=nums[i-1]&&nums[i]!=count){
              arr.push(count);
              count++;
          }
      }
      return arr;

      // <--- OR --->

      
  // const arr = [];
  // const newobj = {};
  // for (let num of nums) {
  //   if (!newobj[num]) newobj[num] = -1;
  // }
  // for (let i = 1; i <= nums.length; i++) {
  //   if (!newobj[i]) {
  //     arr.push(i);
  //   }
  // }
  // return arr;
};

console.log(findDisappearedNumbers(nums));
