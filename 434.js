
// 434. Number of Segments in a String

// Given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space 
// characters.

var s = ", , , ,        a, eaefa";

var countSegments = function(s) {
  let ans = s.trim().split(" ")
  for(let i=0;i<ans.length;i++){
      if(ans[i]==""){
          ans.splice(i,1)
          i=i-2
      }
  }
  if(ans.length<1){
      return 0
  }else{
      return ans.length
  }
};

console.log(countSegments(s))