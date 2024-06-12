
// 10. Regular Expression Matching

// Given an input string s and a pattern p, implement regular 
// expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

var s = "aa", p = "a*";

var isMatch = function(s, p) {
  var arr=[];
   for(let i=0;i<=s.length;i++) {
       arr[i]=[];
       for(let j=0;j<=p.length;j++) {
           arr[i][j]=false;
       }
   }

   arr[0][0]=true;

   for(let i=1;i<=p.length;i++) {
       if(p[i-1]==='*') {
           arr[0][i]=arr[0][i-2];
       }
   }

   for(let i=1;i<=s.length;i++) {
       for(let j=1;j<= p.length;j++) {
           if(p[j-1]===s[i-1]||p[j-1]==='.') {
           arr[i][j]=arr[i-1][j-1];
   }else if(p[j-1]==='*') {
       arr[i][j]=arr[i][j-2]||(arr[i-1][j]&&(s[i-1]===p[j-2]||p[j-2]==='.'));
           }
       }
   }

   return arr[s.length][p.length];
};

console.log(isMatch(s,p))