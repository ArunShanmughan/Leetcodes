
// 438. Find All Anagrams in a String

// Given two strings s and p, return an array of all the start indices of p's 
// anagrams
//  in s. You may return the answer in any order.

var s = "cbaebabacd", p = "abc"




var findAnagrams = function (s, p) {
  // let arr = []
  // let temp = p.split("")
  // temp.sort()
  // for (let i = 0; i < s.length; i++) {
  //     let curr = s.substring(i, p.length + i).split("")
  //     if (curr.sort().join('') == temp.join('')) {
  //         arr.push(i)
  //     }
  // }
  // return arr
  const result = [];
  const pCount = Array(26).fill(0);
  const sCount = Array(26).fill(0);

  const aCharCode = 'a'.charCodeAt(0);

  for (let char of p) {
      pCount[char.charCodeAt(0) - aCharCode]++;
  }

  const pLen = p.length;

  for (let i = 0; i < s.length; i++) {
      sCount[s[i].charCodeAt(0) - aCharCode]++;

      if (i >= pLen) {
          sCount[s[i - pLen].charCodeAt(0) - aCharCode]--;
      }

      if (arraysEqual(sCount, pCount)) {
          result.push(i - pLen + 1);
      }
  }
  return result;
};

function arraysEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
          return false;
      }
  }
  return true;
}

console.log(findAnagrams(s,p))