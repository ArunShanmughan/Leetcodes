

// 3178. Find the Child Who Has the Ball After K Seconds

// You are given two positive integers n and k. There are n children numbered 
// from 0 to n - 1 standing in a queue in order from left to right.

// Initially, child 0 holds a ball and the direction of passing the ball is 
// towards the right direction. After each second, the child holding the ball 
// passes it to the child next to them. Once the ball reaches either end of the 
// line, i.e. child 0 or child n - 1, the direction of passing is reversed.

// Return the number of the child who receives the ball after k seconds.

var n = 5, k = 6;

var numberOfChild = function (n, k) {
  let ind = 0
  let rev = false
  while (k) {
      ind += (!rev) ? 1 : -1;
      rev = (ind == n-1 || ind  == 0) ? !rev  : rev;
      k--;
  }
  return ind;
};

console.log(numberOfChild(n,k))