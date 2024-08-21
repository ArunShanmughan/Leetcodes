
// 599. Minimum Index Sum of Two Lists

// Given two arrays of strings list1 and list2, find the common strings 
// with the least index sum.

// A common string is a string that appeared in both list1 and list2.

// A common string with the least index sum is a common string such that 
// if it appeared at list1[i] and list2[j] then i + j should be the minimum 
// value among all the other common strings.

// Return all the common strings with the least index sum. Return the answer 
// in any order.

var list1 = ["Shogun","Tapioca Express","Burger King","KFC"], 
list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"];


var findRestaurant = function (list1, list2) {
  let curr = Infinity
  let arr = []
  for (let i = 0; i < list1.length; i++) {
      let j = list2.indexOf(list1[i])
      if(j!==-1){
          let sum = i+j
          if(sum<curr){
              arr = [list1[i]]
              curr = sum
          }else if(sum==curr){
              arr.push(list1[i])
          }
      }
  }
  return arr;
};

console.log(findRestaurant(list1,list2))