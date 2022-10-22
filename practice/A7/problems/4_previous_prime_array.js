/*******************************************************************************
Write a function previousPrimeArray(array) that takes in an array of numbers.
The function should a return a new array where each prime number is replaced
with the prime number that comes before it. For example the prime number that comes
before 7 is 5.

Examples:

previousPrimeArray([10, 12, 11, 7, 16]); // => [ 10, 12, 7, 5, 16 ]
previousPrimeArray([17, 24, 29, 5, 2, 4]); // => [ 13, 24, 23, 3, null, 4 ]
*******************************************************************************/

function previousPrimeArray(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (isPrime(num)){
      let newPrime = previousPrime(num)
      newArray.push(newPrime);
    } else {
      newArray.push(num)
    }
  } 
  return newArray
}


function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true
}

function previousPrime(num) {
  for (let i = num - 1; i > 0 ; i--) {
    if (num === 2) {
      return null
    } else if (isPrime(i)) {
      return i
    }
  }

}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = previousPrimeArray;
