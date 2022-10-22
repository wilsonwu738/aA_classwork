/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
  let arr = sentence.split(" ");
  let word = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= word.length) {
      word = arr[i]
    }
  }
  return word

}
console.log(longestWord("I like this trip to Canada"))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
