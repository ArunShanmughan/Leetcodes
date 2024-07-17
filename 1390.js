
// 1390. Four Divisors

// Given an integer array nums, return the sum of divisors of the integers 
// in that array that have exactly four divisors. If there is no such integer 
// in the array, return 0.

var nums = [21,4,7];

var sumFourDivisors = function(nums) {
  let sum = 0
  const getDivisors = (num) => {
       let divisors = [];
       for (let i = 1; i <= Math.sqrt(num); i++) {
           if (num % i === 0) {
               divisors.push(i);
               if (i !== num / i) {
                   divisors.push(num / i);
               }
           }
       }
       return divisors;
   };

   for (let num of nums) {
       let divisors = getDivisors(num);
       if (divisors.length === 4) {
           sum += divisors.reduce((a, b) => a + b, 0);
       }
   }

   return sum;
};

console.log(sumFourDivisors(nums))