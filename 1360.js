
// 1360. Number of Days Between Two Dates

// Write a program to count the number of days between two dates.

// The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.

var date1 = "2020-01-15", date2 = "2019-12-31";

// var daysBetweenDates = function (date1, date2) {
//   var d1 = new Date(date1);
//   var d2 = new Date(date2);

//   var inSec = (d1.getTime() - d2.getTime());

//   var inDay = (inSec / 86400000);

//   return Math.abs(inDay)
// };
// console.log(daysBetweenDates(date1,date2))

//or this is also

var daysBetweenDates = function (date1, date2) {
  var ans =  (Math.abs((new Date(date2))-(new Date(date1)))/86400000)
  return ans;
  };
  
console.log(daysBetweenDates(date1,date2))
