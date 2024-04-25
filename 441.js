

// 441. Arranging Coins

// You have n coins and you want to build a staircase with these coins.
// The staircase consists of k rows where the ith row has exactly i coins.
// The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

var n = 5;

var arrangeCoins = function(n) {
  var count = 0
  for(let i=1;i<=n;i++){
      if(i<=n){
          count++
          n=n-i
      }else{
          break;
      }
  }
  return count;
};

console.log(arrangeCoins(n));