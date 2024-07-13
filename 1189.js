
// 1189. Maximum Number of Balloons

// Given a string text, you want to use the characters of 
// text to form as many instances of the word "balloon" as 
// possible.

// You can use each character in text at most once. Return 
// the maximum number of instances that can be formed.

var text = "loonbalxballpoon";

var maxNumberOfBalloons = function (text) {
  let b = 0
  let a = 0
  let l = 0
  let o = 0
  let n = 0
  let arr = []
  for(let i=0;i<text.length;i++){
   if(text[i]=="b"){
       b++
   }
   if(text[i]=="a"){
       a++
   }
   if(text[i]=="l"){
       l++
   }
   if(text[i]=="o"){
       o++
   }
   if(text[i]=="n"){
       n++
   }
  }
  arr.push(b,a,(l/2),(o/2),n)
  return Math.floor(Math.min(...arr))
};

console.log(maxNumberOfBalloons(text))