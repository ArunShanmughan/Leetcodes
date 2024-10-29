
// 1046. Last Stone Weight

// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and0
//  smash them together. Suppose the heaviest two stones have weights x and y with x <= y. 
//  The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.

var stones = [2,7,4,1,8,1];

var lastStoneWeight = function (stones) {
  function results(arr) {
      let largest = 0
      let second = 0
      let largeInd = 0
      let secondInd = 0
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] > largest) {
              second = largest
              secondInd = largeInd
              largest = arr[i]
              largeInd = i
          } else if (arr[i] > second && largest >= arr[i]) {
              second = arr[i]
              secondInd = i
          }
      }
      return [largest,second,largeInd,secondInd]
  }

  while(stones.length>1){
      let [large,second,firstInd,secondInd] = results(stones)
      stones.splice(firstInd,1)
      stones.splice(stones.indexOf(second),1)
      let curr = Math.abs(large-second)
      if(curr>0){
          stones.push(curr)
      }
  }
  if(stones.length){
      return stones[0]
  }else{
      return 0
  }
};

console.log(lastStoneWeight(stones))