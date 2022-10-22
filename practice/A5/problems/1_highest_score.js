/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/

function highestScore(students) {
  let highestName = [];
  let highestId = [];
  let lowScore = -99;

  for (let i = 0; i < students.length; i++) {
    if (students[i].score > lowScore) {
      lowScore = students[i].score;
      highestName.push(students[i].name)
      highestId.push(students[i].id)

    }

  }
  let finalName = highestName[highestName.length - 1] 
  let finalId = highestId[highestId.length - 1]
  let newName = finalName.split(" ")
  
  return newName[0][0] + newName[1][0] + finalId



}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
