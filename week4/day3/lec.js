/*recursion - a function call itself within itself
/multiply 2*3=6, 3+3=6, 2+2+2=6

base case (the smallest possible case)
you will need to progress toward to the base case, otherwise risk of stack overflow
recursive case (the inductive step): the problem redefined in terms of itself
but on a smaller input

recursion -> call stack

recursion without base case (stack overflow)vs infinite loop (no new memory being allocated)

whatever can be done recursively, can be done iteratively
why do we care?
-other professionals use it
-elegance

where do we normally see recursion
-sorting algos
-searching algos
-tree triversal
-graph triversals

*/

function multiply(num1, num2) {
    if (num1 === 0) return 0; //this is the base case, without this, it would be stack overflow
    console.log(num1)
    return num2 + multiply(num1 - 1, num2);
}



console.log(multiply(2,3))
console.log(multiply(0,8))
console.log(multiply(4,5))



//isPalindrome, look at photo fot recursive solution   
// let i = str[0] === " " ?1 :0

if (2 < 3) {
    return 5;
} else {
    return 0;
}

//fibonacci problem
console.log("this is fib")
const fib = n => {
    if (n === 1 || n ===2) return 1;
    return fib(n-1) + fib(n-2);
}
console.log(fib(5))
console.log(fib(10))


//factorial
function factorial (num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num-1);
}


//exponent
function power(base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * power(base, exp - 1);
}