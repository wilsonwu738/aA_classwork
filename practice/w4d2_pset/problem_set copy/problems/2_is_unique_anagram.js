/***********************************************************************
Write a function isUniqueAnagram(word1, word2) that takes in two strings.
The function should return true if the strings are anagrams of each
other, false otherwise. Anagrams are strings that contain the same
characters, but not necessarily in the same order. Assume there will be
no repeated characters in each input string.

Examples:

isUniqueAnagram('iceman', 'cinema'); // => true
isUniqueAnagram('abcd', 'adcb'); // => true
isUniqueAnagram('abcd', 'adxb'); // => false
isUniqueAnagram('abcd', 'abcdx'); // => false
***********************************************************************/

function isUniqueAnagram(word1, word2) {
    let counter = {};
    
    for (let i = 0; i < word1.length; i++) {
      if (counter[word1[i]] === undefined){
        counter[word1[i]] = 1
      } else {
        counter[word1[i]] += 1
      }
    
    }
    
    for (let i = 0; i < word2.length; i++) {
      if (counter[word2[i]] === undefined){
        counter[word2[i]] = 1
      } else {
        counter[word2[i]] += 1
      }
    }
  
    for (let key in counter) {
      if (counter[key] !== 2) {
        return false;
      }
    }
    return true
  }



  function anagram(word1, word2) {
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < word1.length; i++) {
      let chr1 = word1[i];
      if (!(chr1 in obj1)) obj1[chr1] = 0;
      obj1[chr1]++;
    }
    for (let i = 0; i < word2.length; i++) {
      let chr2 = word2[i];
      if (!(chr2 in obj2)) obj2[chr2] = 0;
      obj2[chr2]++;
    }
  
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) return false;
    }
    for (let key in obj2) {
      if (obj2[key] !== obj1[key]) return false;
    }
  
    return true;
  }
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = isUniqueAnagram;
