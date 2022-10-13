// math method   start with Math.
Math.floor(3.8)  // round down
Math.PI
Math.ceil(3.8)    //round up
Math.round(3.8)
Math.sqrt(9)
Math.abs(-32)

function circleArea(radius) {
    return Math.floor(Math.PI * radius * radius);

}

function weirdSqrt(num) {
    return Math.floor(Math.sqrt(num)) * Math.PI
}
console.log(weirdSqrt(5))

//higher order functions : HoF is a function that takes other functions as arugument and RETURN functions

function foo() {
    console.log("foo");
}

function bar(fn) {  //this is HoF, normally we don't build our HoF, we use the build in HoF
    fn();
    return fn;
}

function myFunc(n) {
    n += 1;
    function myInnerFunc() {
        console.log('hello');
    }
    return myInnerFunc;  //do not return myInnerFunc(), because that will invoke the function, that will return whatever the function returns

} 

function example(fn) {
    fn();
    function innerExample() {
        console.log("Example");
    }
    return innerExample;
}

//callback function

function HoF(fn1, fn2, n) {  // fn1 and fn2 are callback functions
    fn1();
    fn2();
    n += 1;
    return fn1;
}

function test(fn, a, b) {
    console.log(fn(a));
    return fn;
}

function ajr(fn1, fn2, fn3) {   //fn1, fn2, fn3 are callbacks, 
    let arr = [fn1(), fn2(), fn3];
    let result = fn1(fn3());
    return arr[arr.length-1];
}


////// forEach 
console.log("this is forEach")
let arr = [3, 5, 7, 11, 13];
let arr2 = []
arr.forEach(function(ele1, index, ele) { //element is the first argument, do not use i as the first argument, you need ele first.
    // console.log(ele1);                    //function(element, index, array), always in thie order, naming does not matter
    // console.log(index);               //the function after forEach is the callback
    // console.log(ele)
    arr2.push(ele1 * 2)
})

console.log(arr2);

//map, transform the element to something else, like a mapping table.  NO Mutations
console.log("this is map")
let names = ['alice', 'bob', 'carol'];
let newNames = names.map(function (ele,i) {
    return ele.length

})

console.log(newNames)

// let nums = [5, 8, 9, 12, 15, 3]

// nums.map(function (ele, i) {
//     return ele * i

// })


let nums = [1, 2, 3, 4, 5]
let newNums = nums.map(function (ele) {
    return nums = ele * 0
})
console.log(newNums)

let arr3 = ['alice', 'bob', 'carol'];
let newArr3 = arr3.map(function(ele, i) {
    return ele + ele
})
console.log(newArr3)


//filter, returns a new array
console.log('this is filter')

let nums1 = [0, 1, 2, 3, 4, 5]
console.log(nums1.filter(function(ele, i) {
    return ele % 2 === 0;
}));

/////////new syntax

let nums5 = [1, 2, 3, 4, 5]
let double = nums5.map(ele => ele * 2)  // (ele => ele * 2) is the callback function
let evens = nums5.filter(ele => ele % 2 === 0);

console.log(double)
console.log(evens)
