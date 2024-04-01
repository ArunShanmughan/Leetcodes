// You are given an integer n, the number of teams in a tournament that has strange rules:

// If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
// If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
// Return the number of matches played in the tournament until a winner is decided.
var n = 7;

var arr = [];
    var match = 0;
    var res = 0;
    var sum = 0;
    while (n != 1) {
        match = Math.floor(n / 2);
        res = n - match;
        arr.push(match);
        n = res;
    }
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    console.log(sum);