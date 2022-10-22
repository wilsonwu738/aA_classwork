/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

function isPalindrome(sentence) {
  let newSen = "";
  let oriSen ="";

  for (let i = sentence.length -1; i >= 0; i--) {
    if (sentence[i] === " ") {
      newSen += "";
    } else {
      newSen += sentence[i]
    }
  }

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      oriSen += "";
    } else {
      oriSen += sentence[i]
    }
  }
  
  if (newSen === oriSen) {
    return true;
  }  else {
    return false;
  }
}
console.log(isPalindrome('rats live on no evil star')); // => true
console.log(isPalindrome('stella won no wallets')); // => true
console.log(isPalindrome('racecar')); // => true
console.log(isPalindrome('hello world')); // => false


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome;
