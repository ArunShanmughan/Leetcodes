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
