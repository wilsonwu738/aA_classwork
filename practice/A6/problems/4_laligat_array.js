/*******************************************************************************
Write a function laligatArray(array) that takes in an array of numbers and returns
a new array where each number is replaced with its laligat sum.

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

Examples:
laligatArray([10, 11, 20, 15]); // => [ 17, 28, 77, 41 ]
laligatArray([1, 2, 3, 4, 5]); // => [ 0, 2, 5, 5, 10 ]
*******************************************************************************/

function laligatArray(array) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(laligaSum(array[i]))
  }
  return newArr
}


function laligaSum(num) {
  let numSum = 0;
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      numSum += i
    }
  }
  return numSum
}
console.log(laligaSum(5))

function isPrime(num) {
  if (num < 2) {
    return false
  } 

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    } 
  }
  return true
  
}

console.log(laligatArray([10, 11, 20, 15])); // => [ 17, 28, 77, 41 ]
console.log(laligatArray([1, 2, 3, 4, 5])); // => [ 0, 2, 5, 5, 10 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = laligatArray;
