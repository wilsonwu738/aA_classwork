/**************************************************************************************
Write a function `usernames(names)` that takes in an array of names. The function
should return an array containing the corresponding usernames. See the examples.

Examples:

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

Difficulty: Medium
*************************************************************************************/

function usernames(names) {
  let newArr = [];

  for (let i = 0; i < names.length; i++) {
    let nameArr = names[i].split(" ");
    let firstChar = nameArr[0][0].toLowerCase();
    let secondName = nameArr[1].toLowerCase();
    let userName = firstChar + secondName;
    newArr.push(userName)
  }
  return newArr

}

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = usernames;
