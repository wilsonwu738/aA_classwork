//A5 

//highest score
function highestScore(students) {
    let score = 0;
    let ans = "";

    for (let students of students) {
        if (student.score > score) {
            score = student.score;
            ans = student;
        }
    }
    let names = ans.name.split(" ");
    return names[0][0] + names[1][0] + ans.id
}



//snaketoCamel
