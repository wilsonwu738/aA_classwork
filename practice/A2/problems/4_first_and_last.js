/******************************************************************************
Write a function firstAndLast(array) that takes in an array of numbers and
returns either:

- the sum of the first and last elements of the array if there is an even
 number of elements

- the difference between the first and last elements of the array if there is an
 odd number of elements.

You can assume the array contains at least one number.

Examples:

firstAndLast([1, 2, 3, 4]); // => 5
firstAndLast([1, 2, 3, 4, 5]); // => -4
firstAndLast([12, 5]); // => 17
firstAndLast([12]); // => 0
firstAndLast([7, 11, 3]); // => 4
*******************************************************************************/

function firstAndLast(array) {
  let numCount = array.length;
  let result = 0;

  // if (numCount === 1) {
    
  // }
  if (numCount % 2 === 0) {
    result = array[0] + array[numCount - 1];
  }
  if (numCount % 2 !== 0) {
    result = array[0] - array[numCount - 1];
  }
  return result
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = firstAndLast;
