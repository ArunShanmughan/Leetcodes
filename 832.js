
// 832. Flipping an Image

// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.

// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

// For example, inverting [0,1,1] results in [1,0,0].

var image = [[1,1,0],[1,0,1],[0,0,0]];

var flipAndInvertImage = function(image) {
  let arr = []
  for(let i=0;i<image.length;i++){
    let curr = image[i]
    for(let j=0;j<curr.length;j++){
      if(curr[j]==0){
        curr[j]=1
      }else{
        curr[j]=0
      }
    }
      arr.push(image[i].reverse())
  }
  // for(let i=0;i<arr.length;i++){
  //     let curr = arr[i]
  //     for(let j=0;j<curr.length;j++){
  //         if(curr[j]==0){
  //             curr[j]=1
  //         }else{
  //             curr[j]=0
  //         }
  //     }
  // }
  return arr;
};

console.log(flipAndInvertImage(image))