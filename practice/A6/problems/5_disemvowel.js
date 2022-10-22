/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/

function disemvowel(string) {
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    
    if (isVowel(string[i])) {
      newStr += "";
    } else {
      newStr += string[i]
    }
  }
  return newStr

}


function isVowel(char) {
  let vowels = "aeiouAEIOU"
  if (vowels.includes(char)) {
    return true
  } else {
    return false
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
