
// 2169. Count Operations to Obtain Zero

// You are given two non-negative integers num1 and num2.

// In one operation, if num1 >= num2, you must subtract num2 from num1, 
// otherwise subtract num1 from num2.

// For example, if num1 = 5 and num2 = 4, subtract num2 from num1, thus 
// obtaining num1 = 1 and num2 = 4. However, if num1 = 4 and num2 = 5, 
// after one operation, num1 = 4 and num2 = 1.
// Return the number of operations required to make either num1 = 0 
// or num2 = 0.

var num1 = 0, num2 = 10

var countOperations = function(num1, num2) {
    
  let run = num1+num2
  let isZero = Math.min(num1,num2)
  let count = 0
  for(let i=1;i<run;i++){
      if(isZero==0){
          break;
      }
      if(num1==num2){
          count++
          break;
      }else if(num1<num2){
          num2 = num2 - num1
          count++
      }else if(num1>num2){
          num1 = num1 - num2
          count++
      }
  }
  return count
};

console.log(countOperations(num1,num2))