
// 1217. Minimum Cost to Move Chips to The Same Position

// We have n chips, where the position of the ith chip is position[i].

// We need to move all the chips to the same position. In one step,
//  we can change the position of the ith chip from position[i] to:

// position[i] + 2 or position[i] - 2 with cost = 0.
// position[i] + 1 or position[i] - 1 with cost = 1.
// Return the minimum cost needed to move all the chips to the same position.



var position = [2,2,2,3,3]


var minCostToMoveChips = function(position) {
  // // let unique = [...new Set(position)]
  // let count = 0
  // // console.log(unique)
  // if(position.length<3){
  //     return 1
  // }
  // for(let i=0;i<position.length;i++){
  //     if(position[i]%2!=0&&position[i]!=1){
  //         count++
  //     }
  // }
  // return count;

  let odd = 0
  let even = 0
  for(let i=0;i<position.length;i++){
      if(position[i]%2==0){
          even++
      }else{
          odd++
      }
  }
  return Math.min(even,odd)
};

console.log(minCostToMoveChips(position))