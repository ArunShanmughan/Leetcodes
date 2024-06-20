
// 1662. Check If Two String Arrays are Equivalent

// Given two string arrays word1 and word2, return true if the two arrays 
// represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated 
// in order forms the string.

var word1  = ["abc", "d", "defg"], word2 = ["abcddefg"];

var arrayStringsAreEqual = function(word1, word2) {
  function newarr(arr) {
       let result = '';
       for (let i = 0; i < arr.length; i++) {
           result += arr[i];
       }
       return result;
   }
   var comword1=newarr(word1);
   var comword2=newarr(word2);

   return comword1===comword2
};

console.log(arrayStringsAreEqual(word1,word2))