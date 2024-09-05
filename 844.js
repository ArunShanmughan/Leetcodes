
// 844. Backspace String Compare

// Given two strings s and t, return true if they are 
// equal when both are typed into empty text editors. 
// '#' means a backspace character.

// Note that after backspacing an empty text, the text 
// will continue empty.

var s = "ab##", t = "c#d#";

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  // let arr1 = s.split("")
  // let arr2 = t.split("")

  // function hashRemover(arr){
  //     for(let i=0;i<arr.length;i++){
  //         if(arr[i]=="#"){
  //             i--
  //             arr.splice(i,2)
  //             i=i-2
  //         }
  //     }
  //     // if(arr.includes("#")){
  //     //     hashRemover(arr)
  //     // }
  //     return arr;
  // }

  // let ans1 = hashRemover(arr1).join("")
  // let ans2 = hashRemover(arr2).join("")
  // console.log("this is ans1",ans1)
  // console.log("this is ans2",ans2)
  // if(ans1==ans2){
  //     return true
  // }else{
  //     return false
  // }

  function buildString(str) {
      let result = [];
      for (let i=0;i<str.length;i++) {
          if (str[i] === '#') {
              if (result.length > 0) {
                  result.pop();
              }
          } else {
              result.push(str[i]); 
          }
      }
      return result.join('');
  }
  return buildString(s)==buildString(t)
};

console.log(backspaceCompare(s,t))