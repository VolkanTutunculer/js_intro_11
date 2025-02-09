// This is something not available in java-C#

const { getRandomNumber } = require('./../utils/MathHelper.js');

let ran1 = getRandomNumber(-100, 100);
console.log(`Random number is ${ran1}`);

switch (true) {
    case ran1 > 0:
        console.log('POS');
        break;
    case ran1 < 0:
        console.log('NEG');
        break
    default:
        console.log('NEUTRAL');
}

// It Same As below but in switch format
if(ran1 > 0) {
    console.log('POS');
}
else {
    if (ran1 == 0) {
        console.log('NEUTRAL');
    }
    else {
        console.log('NEG');
    }
}