// 2351. First Letter to Appear Twice

// Given a string s consisting of lowercase English letters,
// return the first letter to appear twice.

// Note:

// A letter a appears twice before another letter b if the second occurrence of
// a is before the second occurrence of b.
// s will contain at least one letter that appears twice.

var s = "abccbaacz";

var repeatedCharacter = function (s) {
  let freq = {};
  for (let i = 0; i < s.length; i++) {
    if (freq.hasOwnProperty(s[i])) {
      freq[s[i]]++;
      if (freq[s[i]] === 2) {
        return s[i];
      }
    } else {
      freq[s[i]] = 1;
    }
  }
};

console.log(repeatedCharacter(s));

function repeatedChar(s) {
  let seen = new Set();
  for (let i = 0; i < s.length; i++) {
    if (seen.has(s[i])) {
      return s[i];
    }
    seen.add(s[i]);
  }
  return null;
}

console.log(repeatedChar(s))