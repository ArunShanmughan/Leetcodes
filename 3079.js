// 3079. Find the Sum of Encrypted Integers

// You are given an integer array nums containing positive integers.
// We define a function encrypt such that encrypt(x) replaces every digit
// in x with the largest digit in x. For example, encrypt(523) = 555 and
// encrypt(213) = 333.

// Return the sum of encrypted elements.

var nums = [10, 21, 31];

var sumOfEncryptedInt = function (nums) {
  var sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i] + "";
    let arr = temp.split("");
    if (arr.length > 1) {
      var high = arr[0];
      for (let k = 1; k < arr.length; k++) {
        if (high < arr[k]) {
          high = arr[k];
        }
      }
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] != high) {
          arr[j] = high;
        }
      }
    }
    let samp = arr.join("");
    sum += Number(samp);
  }
  return sum;
};

console.log(sumOfEncryptedInt(nums));
