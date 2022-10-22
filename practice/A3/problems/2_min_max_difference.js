/*******************************************************************************
Write a function `minMaxDifference(array)` that return the difference between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxDifference([1,2,3,4,5]) => 4
minMaxDifference([5,4,3,2,1]) => 4
minMaxDifference([4,2,5,1,-5]) => 10
*******************************************************************************/
//console.log(minMaxDifference([1,3,4,5])) //=> 4
function minMaxDifference(array){
  let maxNum = array[0];
  let minNum = array[0];

  for (let i = 0; i <= array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i];
    }
    if (array[i] < minNum) {
      minNum = array[i];
    }
  }
  return (maxNum - minNum)

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxDifference;
