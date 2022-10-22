/*******************************************************************************
Write a function sillyCipher(sentence, cipher) that takes in an string (sentence)
and an object (cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use a dot (.)

Examples:

sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"}) //=> 'cxxro'
sillyCipher("apple", { a : "c", p : "x"}) //=> 'cxx..'
sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"}) //=> '.ee....q.q..q!'
sillyCipher("twmce", { m : "n", t : "d", w : "a"}) //=> 'dan..''
*******************************************************************************/
console.log(sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"}))

function sillyCipher(sentence, cipher){
  // let newStr = "";
  
  // for (let key in cipher) {
  //   console.log(key)
  //   newStr.concat(key)
  // }
  let newStr = "";
  for (let i = 0; i < sentence.length; i++) {
    let chr = sentence[i];
    if (chr in cipher) {
      newStr += cipher[chr];
    } else {
      newStr += ".";

    }
  }
  return newStr

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sillyCipher;
