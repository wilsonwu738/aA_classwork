/***********************************************************************
Write a function oddWordsOut(sentence) that takes in a sentence string
and returns the sentence where words with an odd number of characters
are removed.

Examples:

oddWordsOut('go to the store and buy milk'); // => 'go to milk'
oddWordsOut('what is the answer'); // => 'what is answer'
***********************************************************************/

function oddWordsOut(sentence) {
    let newSen = [];
    let arr = sentence.split(" ");

    for (i = 0; i < arr.length; i++) {
        if (!isOdd(arr[i])) {
            newSen.push(arr[i])
        }
    }
    return newSen.join(" ")


}

function isOdd(word) {
    if (word.length % 2 !== 0) {
        return true
    } 
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = oddWordsOut;
