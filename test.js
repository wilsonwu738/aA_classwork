// console.log(true || true)  // or
// console.log(true || false)
// console.log(false || true)
// console.log(false || false) 
// console.log(true && false)
// console.log(false && false) //and
// console.log(!true) // not
// console.log(!false)

// console.log(10 > 10)
// console.log(10 < 20)
// console.log(25 >= 5)
// console.log(25 >= 25)
// console.log(12 === 11) //compare value AND type
// console.log(12 !== 11)
// console.log(12 == "12") //compare ONLY value but NOT type


// let str = "hello"
// console.log(str[1])
// console.log(str.length)
// console.log("hello".length)

// console.log('hello'.indexOf('h'))
// console.log('hello'.indexOf('l'))
// console.log('hello'.indexOf('x'))
// console.log('hello'.indexOf('hell'))

// //concatnation
// console.log('race'.concat('car'))
// console.log('race'+'car')
// console.log('hello'+' '+'world')
// console.log(4 + 'hi')
// console.log(4 * 'hi') // not a number (NaN)
// console.log(4 * "10")

// console.log('hello'.toUpperCase())
// console.log('HELLO'.toLowerCase())
// console.log('hello'.slice())   // with no argument, give a copy of the string
// console.log('hello'.slice(1))   // wtih 1 argument, start of that index and onward
// console.log('hello'.slice(1,3))   //with 2 arguments, (inclusive,exclusive)


// //variable declaration
// // var is old
// //let, const, new way to declare (ES6)
// let name = "Johnathan"
// console.log(name)
// console.log(name==="Jonathan")
// name = "Kevin"
// console.log(name)

// //naming convention, dont start with symbol or numbers, first letter lower case, then camel case
// let firstName = "Jonathan"
// let lastName = "Diaz"

// let test
// console.log(test)

// //conditional, mutually exclusive, only 1 will run 
// if (19 === 20) {
//     console.log("they are equal")
// } else {
//     console.log("not equal")
// }


// let num = 20
// if (num === 20){
//     console.log("equal 20")
// } else if (num > 20){
//     console.log("greater")
// } else {
//     console.log("less than")
// }

// //falsey , undefined, null, NaN, false, "", 0, -0

// if (0){
//     console.log(falsy)
// }else{
//     console.log(true)
// }


function strangeWords(words) {
    let newArr = [];
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < 6 && words[i][0] !== "e") {
            console.log(newArr.push(words[i]))

        } else if (words[i].length >=6 && words[i][0] === "e") {
            console.log(newArr.push(words[i]))
            
        }
    }
    return newArr
}
console.log(strangeWords(["experepr", "axp", "cat"]))

let arr = ['exp', 'act', 'cat', 'fei']
console.log(arr[0][0])
