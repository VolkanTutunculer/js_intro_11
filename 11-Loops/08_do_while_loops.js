let num = 0;

while (num < 3){
    console.log(num);
    num++;
}
console.log("end of program");

let num2 = 0;

do {
    console.log(num2);
    num2++;
} while(num2 <3);

// below is interwiev question.
// while checks the condition then runs the code
// do - while runs the code then checks the condition


// generate rand num bewtween 1 to 15. untiol you get 13

const {getRandomNumber} = require('./../utils/MathHelper.js');
let ran; // undefined
let countAt = 0;

do{
    ran = getRandomNumber (1, 15);
    countAt++;
} while (ran !== 13);

console.log(`we got 13 after ${countAt} times.`)




