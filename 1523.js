
// 1523. Count Odd Numbers in an Interval Range

// Given two non-negative integers low and high. Return the count 
// of odd numbers between low and high (inclusive).

var low = 8, high = 10;

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  // var count = 0;
  // for(let i=low;i<=high;i++){
  //     if(i%2!=0){
  //         count++
  //     }
  // }
  // return count;
  // var count = 0;
  // while(low<=high){
  //     if(low%2!=0){
  //         count++
  //         low++
  //     }else{
  //         low++
  //     }
  // }
  // return count;
  // let result = 0
  // if (low%2===0){
  //     low= low+ 1
  // }else{
  //     low
  //     }
  // while (low<=high){
  //     low = low + 2
  //     result++
  // }
  // return result
  var res = Math.floor((high-low)/2);
  if(low%2==1 || high%2==1){
      res++
  }
  return res;
};

console.log(countOdds(low,high))