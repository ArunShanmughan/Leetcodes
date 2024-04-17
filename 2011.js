
// 2011. Final Value of Variable After Performing Operations

// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations,
//  return the final value of X after performing all the operations.


var operations = ["--X","X++","X++"];

var finalValueAfterOperations = function(operations) {
  var x=0;
  for(let i=0;i<operations.length;i++){
      var operation = operations[i];
      if(operation==="X++"||operation==="++X"){
          x=x+1;
      }else{
          x=x-1;
      }
  }
  return x;
};

console.log(finalValueAfterOperations(operations))