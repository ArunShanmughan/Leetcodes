// 350. Intersection of Two Arrays II

// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays 
// and you may return the result in any order.

var nums1 = [1,2,2,1], nums2 = [2,2]

var intersect = function(nums1, nums2) {
  let repeat = {}

 for (let num of nums1) {
     if (repeat[num]) {
         repeat[num]++;
     } else {
         repeat[num] = 1;
     }
 }

 let res = []
 for (let num of nums2) {
     if (repeat[num] > 0) {
         res.push(num);
         repeat[num]--;
     }
 }
 return res;
};

console.log(intersect(nums1,nums2))