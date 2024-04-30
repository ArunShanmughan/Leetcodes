
// 2710. Remove Trailing Zeros From a String

// Given a positive integer num represented as a string, 
// return the integer num without trailing zeros as a string.

var num = "51230100";

var removeTrailingZeros = function(num) {
  var temp =num.split("").reverse();
  for(let i=0;i<temp.length;i++){
      if(temp[i]=="0"){
          delete temp[i]
      }else{
          break;
      }
  }
  var res = [];
  for(let j=0;j<temp.length;j++){
      if(temp[j]!=undefined){
          res.push(temp[j]);
      }
  }
  return res.reverse().join("")
};

console.log(removeTrailingZeros(num));