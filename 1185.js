

// 1185. Day of the Week

// Given a date, return the corresponding day of the week for that date.

// The input is given as three integers representing the day, month and year respectively.

// Return the answer as one of the following values 
// {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.


var day = 18, month = 7, year = 1999;


var dayOfTheWeek = function(day, month, year) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let curr = new Date(year,month-1,day)
  // console.log(curr)
  let dayOfWeek = curr.getDay()
  // console.log(dayOfWeek)
  return days[dayOfWeek]
};

console.log(dayOfTheWeek(day,month,year))