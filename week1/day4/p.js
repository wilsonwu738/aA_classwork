//logEach
function logEach(array) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        console.log(i + ": " + element)
    }
}
logEach(["jason", "aiden", "wilson", "amy"])

//range
function range(start, end) {
    let arr = []
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(range(1,5))

//sum arrays
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum
}
console.log(sumArray([10, 5, 20]))