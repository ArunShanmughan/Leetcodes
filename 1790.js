// leetcode Question 1790

// You are given two strings s1 and s2 of equal length. 
// A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings.
//  Otherwise, return false.


var string1 = "abcd";
var string2 = "dcba";

var areAlmostEqual = function(s1, s2) {
    const str1 = s1.split("").sort().join(" ");
    const str2 = s2.split("").sort().join(" ");
    if(str1!==str2){
        return false
    }
    var count = 0;
    for(let i=0;i<s1.length;i++){
        if(s1[i]!==s2[i]){
            count++
        }
        if(count>2){
            return false
        }
    }
    return true;
}

console.log(areAlmostEqual(string1,string2))