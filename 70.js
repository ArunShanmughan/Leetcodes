
// 70. Climbing Stairs


// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct 
// ways can you climb to the top?

var n = 3;

var climbStairs = function(n) {
  var step1 = 1;
  var step2 = 1;

  for(let i=0;i<n;i++){
      let temp = step1;
      step1 +=step2;
      step2 = temp;
  }

  return step2;
};

console.log(climbStairs(n))