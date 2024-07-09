
// 1518. Water Bottles

// There are numBottles water bottles that are initially full of water. 
// You can exchange numExchange empty water bottles from the market with one full water bottle.

// The operation of drinking a full water bottle turns it into an empty bottle.

// Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.

var numBottles = 15, numExchange = 4;

var numWaterBottles = function(numBottles, numExchange) {
  let ans = numBottles

  while(numBottles>=numExchange){
      const temp = Math.floor(numBottles/numExchange)
      ans+=temp
      numBottles = temp + (numBottles % numExchange)
  }
  return ans;
};

console.log(numWaterBottles(numBottles,numExchange))