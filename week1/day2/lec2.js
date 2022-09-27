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

//funtions help DRY your code, it is a procedure of code that will run when called

function foo(){
    return "bar"
}
console.log(foo())  //function invocaiton, invoking the function
console.log(foo)  // return what foo is, not what it returns

function foo(p1,p2){
    return p1+" "+p2
}
console.log(foo("wilson","wu"))

//more ways to declare a function 
let foo1 = function(){
    return "bar"
}

let foo2 = () =>{
    return "bar"
}

function average(num1,num2){
    let sum = num1+num2;
    let avg=sum/2;
    return avg;
}

function average2(num1,num2){
    let sum = sumNum(num1,num2)
    let avg = sum/2
    return avg
}

function sumNum(num1, num2){
    return num1+num2
}

console.log(average(1,2))
console.log(average2(2,5))