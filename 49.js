
// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. 
// You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a 
// different word or phrase, typically using all the original letters exactly once.

 

var strs = ["eat","tea","tan","ate","nat","bat"];

var groupAnagrams = function(strs) {
  let obj = {};
  strs.forEach((item)=>{
      let data= item.split("").sort().join("");
      if(obj[data]){
          obj[data].push(item)
      }else{
          obj[data]=[item];
      }
  })
  return Object.values(obj)
};

console.log(groupAnagrams(strs))