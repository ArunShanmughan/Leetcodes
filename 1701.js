
// 1701. Average Waiting Time

// There is a restaurant with a single chef. You are given an array 
// customers, where customers[i] = [arrivali, timei]:

// arrivali is the arrival time of the ith customer. The arrival times 
// are sorted in non-decreasing order.
// timei is the time needed to prepare the order of the ith customer.
// When a customer arrives, he gives the chef his order, and the chef starts 
// preparing it once he is idle. The customer waits till the chef finishes 
// preparing his order. The chef does not prepare food for more than one 
// customer at a time. The chef prepares food for customers in the order 
// they were given in the input.

// Return the average waiting time of all customers. Solutions within 10-5 
// from the actual answer are considered accepted.

var customers = [[5,2],[5,4],[10,3],[20,1]];

var averageWaitingTime = function(customers) {
  let time =0;
  let wait = 0;
  for(let i=0;i<customers.length;i++){
   let curr = customers[i]
   let reach  = curr[0]
   let prep = curr[1]

   if(time<reach){
       time = reach
   }
   wait += prep + (time-reach)
   time+=prep
  }
  return wait/customers.length
};

console.log(averageWaitingTime(customers))