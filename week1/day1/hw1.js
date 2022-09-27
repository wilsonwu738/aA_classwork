//round 1 what is node REPL??? is there a short cut for node xxxx
console.log(4+4/2)
console.log(true && false)
console.log(2 + "pizza")
console.log (5 === 5.0)
console.log(6 +6 !== 12)
console.log(2>1 || false)
console.log('san francisco'[2 * 3]) // space counted as 1 char
console.log('bootcamp'.indexOf('T'))  // returns -1, because not found
console.log('bootcamp'.indexOf('camp'))  //returns 4
console.log(true || false)
console.log(true && false)

//round 2 
let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1];
console.log(lastChar);
console.log(sentence.indexOf(lastChar)) // count to find the fisrt P

//round 3
let age = 30;
if (age > 30){
    console.log('older than 30');
}else{
    console.log('younger than 30')
}

// round 4
let num1 = 11
if (num1 > 5){
    console.log('if')
}

let num2 = 5
if (num2 > 5){
    console.log('if');
}else{
    console.log('else');
}

let num3 = 0;
if (num3 <0){
    console.log('if');
}else if (num3 > 0){
    console.log('else if')
}else{
    console.log('else');
}

//when to use {} and ;