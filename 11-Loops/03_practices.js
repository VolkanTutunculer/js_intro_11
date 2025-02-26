const { getRandomNumber } = require('./../utils/MathHelper.js');
// Output all the odd numbers from 1 to Random Number
// (between 10 and 20) (both inclusive) -> 1 3 5 7 9 ….

let num = getRandomNumber(10, 20);
console.log(`The random number is ${num}`)
for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
/*
Generate a random number bt 1 to 10 (both inclusive
Find the product of all the numbers starting from 1 to randomly generated random

5       -> 1 * 2 * 3 * 4 * 5 -> 120
6       -> 1 * 2 * 3 * 4 * 5 * 6 -> 720
3       -> 1 * 2 * 3 -> 6
*/


const { getRandomNumber } = require('./../utils/MathHelper.js');
let num2 = getRandomNumber(1, 10);
console.log(`The random number is ${num2}`)

let prod = 1;
for (let i = 1; i <= num2; i++) {
    prod *= i;
}
console.log(prod);


/*
Print all the numbers between 2 random numbers in the range 
of 1 to 10 (both inclusive) in ascending order

ran1 ran2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/


const { getRandomNumber } = require('./../utils/MathHelper.js');
let number1 = getRandomNumber(1, 10);
let number2 = getRandomNumber(1, 10);
console.log(`The random number1 is ${number1}, number2 is ${number2}`)

if (number1 >= number2) {
    for (let i = number2; i <= number1; i++) {
        console.log(i);
    }
}
else {
    for (let i = number1; i <= number2; i++) {
        console.log(i);
    }
}

// the Teachers way

const { getRandomNumber } = require('./../utils/MathHelper.js');
let ran1 = getRandomNumber(1, 10);
let ran2 = getRandomNumber(1, 10);

console.log(`The random numbers are = ${ran1} and ${ran2}`);

let min = Math.min(ran1, ran2);
let max = Math.max(ran1, ran2);

for (let i = min; i <= max; i++) {
    console.log(i);
}

