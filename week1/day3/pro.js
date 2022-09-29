function logBetween(num1, num2) {   // what happen if i pass 3 numebers in here?
    for (let i = num1; i < num2; i++){
        console.log(i)
    }
}
//logBetween(1,5)   

function logBetweenStepper(min, max, step) {
    for (let i = min; i <= max; i+=step) {
        console.log(i)
    }
}
//logBetweenStepper(5,25,3)


function printFives(max) {
    for (let i = 0; i < max; i++) {
        if (i % 5 === 0) {
            console.log(i)
        }
    }
}
//printFives(50)

function printReverse(min, max) {
    for (let i = max; i > min; i--) {
        console.log(i)
    }
}
//printReverse(10,15)

function sumNums(max) {
    let i = 0;
    let sum = 0;
    while (i < max) {
        sum += i;
        i++;
    }
    return sum    // need this return, otherwise this will be undefine
}
//console.log(sumNums(5))

function isFactorOf(num, factor) {
    return num % factor === 0
} 
console.log(isFactorOf(10,3))