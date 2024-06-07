
// 1431. Kids With the Greatest Number of Candies

// There are n kids with candies. You are given an integer array candies, 
// where each candies[i] represents the number of candies the ith kid has, 
// and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, 
// after giving the ith kid all the extraCandies, they will have the greatest 
// number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

var candies = [4,2,1,1,2], extraCandies = 1;

var kidsWithCandies = function(candies, extraCandies) {
  let max=candies[0];
 for(let i=0;i<candies.length;i++) {
   if(candies[i]>max) {
       max=candies[i];
   }
 }
 let res=[];  
 for(let j=0;j<candies.length;j++){
     if(candies[j]+extraCandies>=max) {
         res.push(true);
     } else {
         res.push(false);
     }
 }
 return res;
};

console.log(kidsWithCandies(candies,extraCandies))