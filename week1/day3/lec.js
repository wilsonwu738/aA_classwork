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

for (let i = 1; i <= 10; i++){ // in for loop (initializer, condition, incrementer)
    console.log(i)
}

console.log("after the loop")

function printRange(start, end){
    for (let i = start; i <= end; i++){
        console.log(i)
    }
}
printRange(3,10)