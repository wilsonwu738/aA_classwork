/*******************************************************************************
Write a function longestBigram(sentence) that takes in a sentence string and returns
the longest bigram in the sentence. A bigram is a pair of consecutive words.
When returning the bigram, include the space between the words.
Assume there will be no punctuation. In the case of a tie, return the earlier bigram.

Examples:

longestBigram('measure twice cut once'); // => 'measure twice'
longestBigram("One must have a mind of winter"); // => 'must have'
longestBigram("go home to eat"); // => 'go home'
longestBigram("his last assessment is fun"); // => 'last assessment'
*******************************************************************************/

function longestBigram(sentence) {
  let arr = sentence.split(" ");
  let bigram = [];
  let strBigram = bigram.join("")

  for (let i = 0; i < arr.length - 1; i++) {
    let first = arr[i];
    let second = arr[i+1];

    if ((first.length + second.length) > strBigram.length) {
      bigram = [first, second]
      strBigram = bigram.join("")
    }
  }
  return bigram.join(" ")

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestBigram;
