
// 3274. Check if Two Chessboard Squares Have the Same Color

// You are given two strings, coordinate1 and coordinate2, representing 
// the coordinates of a square on an 8 x 8 chessboard.

// Return true if these two squares have the same color and false otherwise.

// The coordinate will always represent a valid chessboard square. 
// The coordinate will always have the letter first (indicating its column), 
// and the number second (indicating its row).

var  coordinate1 = "a1", coordinate2 = "h3";

var checkTwoChessboards = function(coordinate1, coordinate2) {
  let letter = ["a","b","c","d","e","f","g","h"]
  let dir1 = coordinate1.split("")
  let dir2 = coordinate2.split("")

  let sum1 = (letter.indexOf(dir1[0])+1)+parseInt(dir1[1])
  let sum2 = (letter.indexOf(dir2[0])+1)+parseInt(dir2[1])
  return (sum1%2==0)==(sum2%2==0)
};

console.log(checkTwoChessboards(coordinate1,coordinate2))