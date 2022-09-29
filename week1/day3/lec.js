// //day2 hw
// function isSubString (searchString, subString){
//     if (searchString.indexOf(subString) > -1){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isSubString("hello", "el"))
// console.log("hello".indexOf("el"))
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for (let i = 1; i <= 10; i++){ // in for loop (initializer, condition, incrementer)
//     console.log(i)
// }

// console.log("after the loop")

// function printRange(start, end){
//     for (let i = start; i <= end; i++){
//         console.log(i)
//     }
// }
// printRange(3,10)


// function printRange(start, end){
//     for (let i = start; i <= end; i++){
//         console.log(i)
//         return i     //return will end the loop
//     }
// }

// let myVar = printRange(1,4)
// console.log(myVar)

function printRange1(start, end){
    let i = start;
    while (i <= end){     //runs as long as this is true
        console.log(i);
        i++
    }
}
//printRange1(10,25)

// let i = 20;
// while (false){
//     console.log(i);
// }


// function skipFive(num){
//     for (let i = 1; i <= num; i++){
//         if (i === 5){
//             continue
//         }
//         console.log(i)
//     }
// }

// skipFive(6)

// function breakAtFive (num) {
//     for (let i = 1; i <= num; i++){
//         if (i === 5){
//             break
//         }
//         console.log(i)
//     }
//     console.log("after the loop")
// }
// breakAtFive(20)

// function isPrime(num){
//     for (i = 1; i <= num; i++){
//         counter = 0
//     }

    
//     isDivisible = 
//     return num >= 2 
// }

function isPrime(num){
    if (num < 2) return false;
    for (let n = 2; n < num; n++){
        if (num % n === 0){
            return false;
        }
    }
    return true;

}

console.log(isPrime(10))
console.log(isPrime(5))