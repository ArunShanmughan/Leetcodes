
// 2114. Maximum Number of Words Found in Sentences

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

var  sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

var mostWordsFound = function(sentences) {
  let highest = 0;
  let currenthighest =0;

  for(let i=0;i<sentences.length;i++){
      currenthighest = sentences[i].split(" ").length;
      if(highest < currenthighest){
          highest = currenthighest;
      }
  }
  return highest;
};

console.log(mostWordsFound(sentences))