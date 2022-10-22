/*******************************************************************************
Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
and an object(cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use the character.

Examples:

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*******************************************************************************/

//loop through the string/sentence, if key value exist, replace it with the element 
// console.log(magicCipher("add me on facebook" , { a : "c", d : "q"})) //=> "cqq me on fccebook"

// function magicCipher(sentence, cipher){
//   let arr = sentence.split(' ')
  
//   for (let i = 0; i < sentence.length; i++) {
//     if (cipher.sentence[i] !== undefined) {
//       arr.push(cipher.sentence[i])
//     }else {
//       arr.push(sentence[i])
//     }
//   }
//   return arr.join("")
// }

function magicCipher(sentence, cipher) {
  let newSen = "";
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (cipher[char] !== undefined) {
      newSen += cipher[char];
    } else {
      newSen += char;
    }
  }

  return newSen
}




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicCipher;
