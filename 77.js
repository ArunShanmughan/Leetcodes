
// 77. Combinations

// Given two integers n and k, return all possible combinations of k 
// numbers chosen from the range [1, n].

// You may return the answer in any order.

var n = 4, k = 2;

var combine = function (n, k) {
  let result = []
  function backTracking(start, path) {
      if (path.length == k) {
          result.push([...path])
          return;
      }

      for (let i = start; i <= n; i++) {
          path.push(i)
          backTracking(i + 1, path);
          path.pop();
      }
  }
  backTracking(1, []);
  return result;
};

console.log(combine(n,k))