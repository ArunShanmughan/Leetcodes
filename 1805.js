
// 1805. Number of Different Integers in a String

// You are given a string word that consists of digits and lowercase English letters.

// You will replace every non-digit character with a space. For example,
//  "a123bc34d8ef34" will become " 123  34 8  34". Notice that you are left with some integers that are separated by at least one 
//  space: "123", "34", "8", and "34".

// Return the number of different integers after performing the replacement operations on word.

// Two integers are considered different if their decimal representations without any leading zeros are different.

var word = "a123bc34d8ef34"

var numDifferentIntegers = function (word) {
  let k = word.match(/\d+/g) || 0
  let i = 0
  let c = 0
  let final = []

  while (i < k.length) {
      final[i] = Number(k[i])
      i++
  }
  
  final = [...new Set(final)]
  return (final[0] == Infinity) && final.length != 1 ? final.length + 1 : final.length

};

console.log(numDifferentIntegers(word));