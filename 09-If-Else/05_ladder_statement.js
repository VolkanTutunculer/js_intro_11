const { getRandomNumber} = require('./../utils/MathHelper.js');

/* get ramdon number between -5 and 5. find if number is POS, NEG, NATURAL
*/

let ran1 = getRandomNumber(-5, 5);
console.log(`The random num1 is = ${ran1}`);

if (ran1 >0) {
    console.log('POS');
}
else if (ran1 == 0) {
    console.log('NEURTAL');
}
else {
    console.log('NEG');
}

// OR

let result1 = ran1 >0 ? 'POS' : ran1 == 0 ? 'NEUTRAL' : 'NEG';
console.log(result1);

console.log('End of program!')