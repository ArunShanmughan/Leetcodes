
// 2651. Calculate Delayed Arrival Time

// You are given a positive integer arrivalTime denoting the arrival 
// time of a train in hours, and another positive integer delayedTime 
// denoting the amount of delay in hours.

// Return the time when the train will arrive at the station.

// Note that the time in this problem is in 24-hours format.

var arrivalTime = 13, delayedTime = 11

var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
  let ans = arrivalTime+delayedTime
  
  if(ans<24){
      return ans
  }else{
      return ans-24
  }
};

console.log(findDelayedArrivalTime(arrivalTime,delayedTime))