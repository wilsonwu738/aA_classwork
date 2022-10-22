/*******************************************************************************
Write a function `leastCommonMultiple(num1, num2)` that returns the
lowest number which is a multiple of both inputs.

Examples:

leastCommonMultiple(2, 3) => 6
leastCommonMultiple(6, 10) => 30
leastCommonMultiple(24, 26) => 312   3,2,2,2, 2,13
*******************************************************************************/

function leastCommonMultiple(num1, num2) {
  let i = Math.max(num1, num2);
  while (i % num1 !== 0 || i % num2 !== 0) {
    i++;
  }
  return i 
}




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = leastCommonMultiple;
