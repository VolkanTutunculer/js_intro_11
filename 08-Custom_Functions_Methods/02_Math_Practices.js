const { getRandomNumber} = require ('./../utils/MathHelper.js');

/*
Create 4 random numbers within 1 and 50 both include and find their average
*/

let r1 = getRandomNumber(1, 50);
let r2 = getRandomNumber(1, 50);
let r3 = getRandomNumber(1, 50);
let r4 = getRandomNumber(1, 50);

console.log(r1, r2, r3, r4);
console.log((r1 + r2 + r3 + r4)/4 );

/*
Generate 3 random numbers within 50 and 100 both include and find the max, min one
*/

let r5 = getRandomNumber(50, 100);
let r6 = getRandomNumber(50, 100);
let r7 = getRandomNumber(50, 100);

console.log(r5, r6, r7);
console.log(Math.max(r5, r6, r7));
console.log(Math.min(r5, r6, r7));