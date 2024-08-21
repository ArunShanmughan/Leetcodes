
// 830. Positions of Large Groups

// In a string s of lowercase letters, these letters form consecutive 
// groups of the same character.

// For example, a string like s = "abbxxxxzyy" has the groups 
// "a", "bb", "xxxx", "z", and "yy".

// A group is identified by an interval [start, end], where start and 
// end denote the start and end indices (inclusive) of the group. 
// In the above example, "xxxx" has the interval [3,6].

// A group is considered large if it has 3 or more characters.

// Return the intervals of every large group sorted in increasing 
// order by start index.

var s = "abcdddeeeeaabbbcd";

var largeGroupPositions = function(s) {
  // let count = 0
  // let arr = []
  // let res = []
  // for(let i=0;i<s.length;i++){
  //     if(count==0){
  //         arr = [i]
  //     }
  //     if(s[i]==s[i+1]){
  //         count++
  //     }else{
  //         if(count>=2){
  //             arr.push(i)
  //             res.push(arr)
  //         }
  //         count = 0
  //     }
  // }
  // return res

  //second method using 2 loop

  let res = []
  s = s.split("")
  for(let i=0;i<s.length;i++){
      let ind = i
      for(let j=i+1;j<s.length;j++){
          if(s[i]==s[j]){
              ind++
          }else{
              break
          }
      }
      if(ind-i>=2){
          res.push([i,ind])
      }
      i = ind
  }
  return res;
};

console.log(largeGroupPositions(s))