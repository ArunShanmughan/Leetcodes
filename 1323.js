
// 1323. Maximum 69 Number

// You are given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

var num = 9669;

var maximum69Number  = function(num) {
  let curr = num+""
  let nine = "9"
  let six = "6"
  let largest = num;
  let arr = curr.split("")
  for(let i=0;i<arr.length;i++){
      if(arr[i]==nine){
          arr[i] = six
      }else if(arr[i]==six){
          arr[i] = nine
      }
      if(largest<Number(arr.join(""))){
          largest = Number(arr.join(""))
      }
      arr = curr.split("")
  }

  return largest;
};

console.log(maximum69Number(num))