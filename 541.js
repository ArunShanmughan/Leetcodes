
// 541. Reverse String II

// Given a string s and an integer k, reverse the first k characters for every 2k
// characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are 
// less than 2k but greater than or equal to k characters, then reverse the first 
// k characters and leave the other as original.

var s = "hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl" , k = 39;

var reverseStr = function (s, k) {
  // function splitString(text) {
  //     const result = [];
  //     for (let i = 0; i < text.length; i += k) {
  //         result.push(text.substring(i, i + k));
  //     }
  //     return result;
  // }
  // var ans = splitString(s)
  // var sample = []
  // for (let i = 0; i < ans.length; i++) {
  //     if (i % k == 0) {
  //         let cur = ans[i].split("").reverse().join("")
  //         sample.push(cur);
  //     } else {
  //         sample.push(ans[i])
  //     }

  // }
  // return sample.join("")
  const arr = s.split("");
  const n = arr.length;
  for (let i = 0; i < n; i += 2 * k) {
      let left = i;
      let right = Math.min(n - 1, i + k - 1);
      while (left < right) {
          [arr[left], arr[right]] = [arr[right], arr[left]];
          left++;
          right--;
      }
  }
  return arr.join("");
};

console.log(reverseStr(s,k))