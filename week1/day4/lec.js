// elements in array, array is mutable while string is immutable
let arr = ['c', 'a', 't'];  // start with 0 index, 'c' is an element

let str = "cat";
str[0] = "x"
console.log(str)

arr[0] = "x"
console.log(arr)

let arr2 = ['hi', 10, 9, true, undefined, null, [1,2]];
console.log(arr2)
console.log(arr2[0]);
console.log(arr2[5][1])