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
console.log(arr2[6][1])

//Array method
let fruits = ["apple", "orange", "pear"];
console.log(fruits.length);
console.log(fruits.indexOf("pear"));
console.log(fruits.includes("watermelon")); // includes return true or false

fruits.push("watermelon");  // add the value to the end of the arrray
console.log(fruits);
fruits.pop();     //pop removes the last element
console.log(fruits);
fruits.unshift('grape');  //put the value to the front 
console.log(fruits);
fruits.shift()
console.log(fruits)

//more array methods, NON mutable
console.log("immutables now")
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(fruits.concat(numbers));
console.log(fruits)