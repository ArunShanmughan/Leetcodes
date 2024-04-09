
// 1704. Determine if String Halves Are Alike

// You are given a string s of even length. Split this string into two halves of equal lengths,
//  and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U').
//  Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.


var s = "textbook";

var halvesAreAlike = function(s) {
  var regex = /[aeiouAEIOU]/;
  var arr = s.split("")
  var count1  = 0;
  var count2  = 0
  for(let i = 0;i<arr.length/2;i++){
      if(regex.test(arr[i])){
          count1++
      }
  }

  for(let i=arr.length/2;i<arr.length;i++){
      if(regex.test(arr[i])){
          count2++
      }
  }
  if(count1==count2){
      return true;
  }else{
      return false;
  }
};

console.log(halvesAreAlike(s));
 