//data modeling
//data structure: a container to store and organize data 

let arr = ["jon", "cbie", "zack", "cat"] //array
let student = {
    name: "zack",
    gender: "male",
    height: "5 6"
 }

 console.log(student["name"])  // you have to use string notation when use bracket
 console.log(student.name) // this is the alternative to get the value 

//  let student = {name: "will", eye: "brown", hair: "black"}
//  let classStudent = ["jason", "amy", "jack", "kevin"] //should do array of objects
//  let car = {brand: "lexus", model: "RX350", color: "white"}
//  let parkingLot = {car1: "T123123", car2: "A2ijoew", car3: "U22123"} //should do array of car objects
let student1 = {name: "jon", grade: 2};
let student2 = {name: "sam", grade: 4};
let student3 = {name: "joe", grade: 12};
let class1 = [student1, student2, student3]
console.log(class1);
for (let student of class1) {   //loop thorugh values
    console.log(student.name);
    console.log(student.grade)
}

for (let student in class1) {     //loop through keys, because array does not have keys, this will give undefined here
    console.log(student.name);
    console.log(student.grade)
}