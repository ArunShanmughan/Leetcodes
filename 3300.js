

// 3300. Minimum Element After Replacement With Digit Sum

// You are given an integer array nums.

// You replace each element in nums with the sum of its digits.

// Return the minimum element in nums after all replacements.

var nums = [999,19,199];

var minElement = function(nums) {
  let arr = []
  for(let i=0;i<nums.length;i++){
      let curr = nums[i]+''
      let sum = 0
      for(let j=0;j<curr.length;j++){
          sum+=Number(curr[j])
      }
      arr.push(sum)
  }

  console.log(arr)
  return Math.min(...arr)
};

console.log(minElement(nums))