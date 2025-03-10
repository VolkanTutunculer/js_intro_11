const {getRandomNumber} = require('./../utils/MathHelper.js');

let gameNumber = 5;
let attempt = 0;

for ( ; ; ) {
    let randomNumber = getRandomNumber(1,10);
    attempt++;
    console.log(randomNumber);

    if (randomNumber === gameNumber){
        break;
    }
}

let time = attempt === 1 ? 'time' : 'times'
console.log(`Game is over after ${attempt} ${time}!`);

// better way to do that :D

const {getRandomNumber} = require('./../utils/MathHelper.js');

let gameNumber1 = 5;
let attempt1 = 0;
let randomNumber1;

while(randomNumber1 !== gameNumber1){
    randomNumber1 = getRandomNumber(1, 10);
    attempt1++;
}

let time1 = attempt1 === 1 ? 'time' : 'times'
console.log(`Game is over after ${attempt1} ${time1}!`);

