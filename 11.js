
// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn 
// such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container 
// contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

var height = [1,8,6,2,5,4,8,3,7];

var maxArea = function(height) {
  // var maximum = 0;
  // var area = 0;
  // var start =0;
  // var end = height.length-1;
  // while(start<end){
  //     if(height[start]<height[end]){
  //         maximum = height[end]-height[start];
  //         start++;
  //         if(area<height[end]*maximum){
  //             area = height[end]*maximum;
  //         }
  //     }else{
  //         maximum = height[end]-height[start];
  //         if(area<height[end]*maximum){
  //             area = height[end]*maximum;
  //         }
  //         end--;
  //     }
  // }
  // return area;

  var start =0;
  var end = height.length-1;
  var ans = 0;
  while(start<end){
      let volume = 0;
      let area = 0;
      let diff = end-start;
      area = Math.min(height[start],height[end]);
      volume = area*diff
      if(ans<volume){
          ans = volume;
      }

      if(height[start]<height[end]){
          start++;
      }else{
          end--;
      }
  }
  return ans;
};

console.log(maxArea(height))