const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: ['Soccer', 'Watching movies'],
    examScores: {
        midterm: 60,
        second: 75,
        third: 80,
        fouth: 100,
        final: 90
    }
}

console.log(student);

console.log(student.hobbies);
console.log(student.examScores);
console.log(student.hobbies[0]);
// console.log((student.examScores.midterm+student.examScores.final)/2);  /what if there was 10 exams?


const AllExamValues = Object.values(student.examScores); // [60, 90]
let average = AllExamValues.reduce((acc, curr) => acc + curr, 0) / AllExamValues.length;
console.log(average);
