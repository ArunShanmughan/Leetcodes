
// 1773. Count Items Matching a Rule

// You are given an array items,
// where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item.
// You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

var items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  var count = 0;
  if (ruleKey == 'type') {
      ruleKey = 0;
  }
  if (ruleKey == 'color') {
      ruleKey = 1;
  }
  if (ruleKey == 'name') {
      ruleKey = 2;
  }

  for (let i = 0; i < items.length; i++) {
      let temp = items[i];
      if (temp[ruleKey] == ruleValue) {
          count++
      }
  }
  return count;
};

console.log(countMatches(items,ruleKey,ruleValue))