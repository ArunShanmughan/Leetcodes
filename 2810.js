// 2810. Faulty Keyboard

// Your laptop keyboard is faulty, and whenever you type a character 'i' on it, 
// it reverses the string that you have written. Typing other characters works as 
// expected.

// You are given a 0-indexed string s, and you type each character of s using your 
// faulty keyboard.

// Return the final string that will be present on your laptop screen.

var s = "poiinter";

var finalString = function (s) {
var ind = s.indexOf("i");
var arr = [];
for (let i = 0; i < ind; i++) {
  if (s[i]) {
    arr.push(s[i]);
  }
}

for (let i = ind; i < s.length; i++) {
  if(s[i]=="i"){
    arr.reverse()
  }
  if (s[i] != "i") {
    arr.push(s[i]);
  }
}

return arr.join("");
}

console.log(finalString(s))
