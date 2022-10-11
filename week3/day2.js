//Scope

// let name = "Johnathan";
// function foo() {
//     console.log(name)
// }

//test only exist/defined in the function, not outside of the function
// function bar() {
//     let test = "something";
// }
//console.log(test)

function foo2() {
    let test1 = "this";
    for (let i = 0; i < 3; i++) {    //for loop has its own scope
        console.log(test1);
        let bar2 = "other";
    }
    //console.log(bar2) // this will give reference error, bar2 is only defined in the for loop
}
foo2()

//everything with {} has its own scope

let myFavoriteFood = "pizza";
function outer() {
    myFavoriteFood = "ramen";

    function inner() {
        myFavoriteFood = "tacos";
        console.log(myFavoriteFood);
    }
    inner();
    console.log(myFavoriteFood)
}
outer();
console.log(myFavoriteFood)

function sumArray(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {  // you cannot assign sum in the loop, because it will change throughout the loop
        sum += arr[i];
    }
    return sum
}

console.log(sumArray([1,2,3,4,5]))


//Hoisting, JS pass the code twice, this is why you can call the function before the function is being declared
//function and var are hoisted
//hoidting can be thought as proof reading your code and moving all your defined function to the top of your code 


//let and const are not hoisted, they are being read from top to bottom

//bar()
let bar = () => {    //this is a way to decleare function in ES6
    console.log("foo");
} 
bar()

console.log(word)
var word = "hello"
console.log(word)

let name = "9"
let name = "8" //you cannot redeclare with let