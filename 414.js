
// 414. Third Maximum Number

// Given an integer array nums, return the third distinct maximum number in this array.
// If the third maximum does not exist, return the maximum number.


var nums = [2,2,3,1];


var thirdMax = function (nums) {
  let arr = nums.sort((a,b)=>a-b);
  let uniqueArr = arr.filter((val,ind)=>arr.indexOf(val)==ind);
  var long = uniqueArr.length;
  if(uniqueArr.length>2){
      return uniqueArr[long-3]
  }else{
      return Math.max(...uniqueArr);
  }

};

console.log(thirdMax(nums));