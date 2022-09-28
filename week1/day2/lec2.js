// if (!0){     // 0 is falsy
//     console.log("in the if");
// }else{
//     console.log("in the else")
// }

// let num = 20
// if (num = 0){  // truthy or falsy
//     console.log("in the if")
// }else{
//     console.log("in the else")
// }

// //funtions help DRY your code, it is a procedure of code that will run when called

// function foo(){
//     return "bar"
// }
// console.log(foo())  //function invocaiton, invoking the function
// console.log(foo)  // return what foo is, not what it returns

// function foo(p1,p2){
//     return p1+" "+p2
// }
// console.log(foo("wilson","wu"))

// //more ways to declare a function 
// let foo1 = function(){
//     return "bar"
// }

// let foo2 = () =>{
//     return "bar"
// }

// function average(num1,num2){
//     let sum = num1+num2;
//     let avg=sum/2;
//     return avg;
// }

// function average2(num1,num2){
//     let sum = sumNum(num1,num2)
//     let avg = sum/2
//     return avg
// }

// function sumNum(num1, num2){
//     return num1+num2
// }

// console.log(average(1,2))
// console.log(average2(2,5))

//problem 1
function isOdd(num){
    if (num % 2 !== 0){
        return true
    }else{
        return false
    }
    
}

console.log(isOdd(-17))

function isOdd2(num){
    // num % 2 === 1
    // return true
    // num % 2 === 0
    // return false
    return num % 2 !== 0
}
console.log(isOdd2(8))


//problem 2
function plusFive(num){
    return num + 5
}
console.log(plusFive(10))

//problem3
function threeOrSeven(num){
    if (num % 3 === 0 || num % 7 === 0){
        return true
    } else{
        return false
    }
}
console.log(threeOrSeven(10))

//Problem 4
function hello(str){
    return "hello" + " " + str
}
console.log(hello("wilson"))

//problem 5
function yell(string){
    console.log(string.toUpperCase())
}
yell("i like coding")

//problem 6
function whisper(string){
    let copy = string.toLowerCase()
    return copy        // why this does not work without return
}
console.log(whisper("I HATE MATH"))

//problem 7
function isSubstring(searchString, subString) {
    return searchString.indexOf(subString) !== -1
}
console.log(isSubstring('hello','el'))

//problem 8 
