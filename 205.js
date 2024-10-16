
// 205. Isomorphic Strings

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. 
// No two characters may map to the same character, but a character may map to itself.

var s = "bbbaaaba", t ="aaabbbba";

var isIsomorphic = function (s, t) {

  // function Mapper(str) {
  //     let map = {}
  //     for (let key of str) {
  //         map[key] = (map[key] || 0) + 1;
  //     }
  //     return map
  // }

  // let str1 = Mapper(s.split(""))
  // let str2 = Mapper(t.split(""))

  // let arr1 = Object.values(str1)
  // let arr2 = Object.values(str2)

  // for(let i=0;i<arr1.length;i++){
  //     if(arr1[i]!=arr2[i]){
  //         return false
  //         break;
  //     }
  // }
  // return true


  // function counter(arr){
  //     let temp = []
  //     let count = 0
  //     for(let i=0;i<arr.length;i++){
  //         if(arr[i]==arr[i+1]){
  //             count++
  //         }else{
  //             count++
  //             temp.push(count)
  //             count = 0
  //         }
  //     }
  //     return temp;
  // }

  // let unique1 = [...new Set(s)]
  // let unique2 = [...new Set(t)]

  // let count1 = counter(s.split(""))
  // let count2 = counter(t.split(""))

  // console.log(unique1)
  // console.log(unique2)

  // console.log(count1)
  // console.log(count2)

  // if((count1.length!=count2.length)||(unique1.length!=unique2.length)){
  //     return false
  // }else{
  //     for(let i=0;i<count1.length;i++){
  //         if(count1[i]!=count2[i]){
  //             return false
  //             break;
  //         }
  //     }
  //     return true;
  // }

  let arr1 = {}
  let arr2 = {}

  for(let i=0;i<s.length;i++){
      if(arr1[s[i]]!==arr2[t[i]]){
          return false
      }else{
          arr1[s[i]] = i
          arr2[t[i]] = i
      }
  }
  return true;
};

console.log(isIsomorphic(s,t))