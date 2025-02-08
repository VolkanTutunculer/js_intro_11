
let username = 'TechGlobal'; // TechGlobal
let password = 'pasword' // Test1234

if (username === 'TechGlobal') {
    if (password === 'Test1234') {
        console.log('You are logged in');
    }
    else {
        console.log('Invalid Password. This password used by user John.Doe !');
    }
}
else {
    console.log('Invalid Username entered!');
}



/*
Generate a random number between 1 and 12 (both inclusive) are considered as months
1 January
.
.
12 December

Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/
const { getRandomNumber } = require('./../utils/MathHelper.js');
let month = getRandomNumber(1, 12);
console.log(month);
if (month == 12 || month == 1 || month == 2) {
    console.log('Winter')
}
else if (month == 3 || month == 4 || month == 5) {
    console.log('Spring')
}
else if (month == 6 || month == 7 || month == 8) {
    console.log('Summer')
}
else if (month == 9 || month == 10 || month == 11) {
    console.log('Fall')
}

// OR

if (month === 12 || month === 1 || month === 2) console.log('Winter');
else if (month === 3 || month === 4 || month === 5) console.log('Spring');
else if (month === 6 || month === 7 || month === 8) console.log('Summer');
else console.log('Fall');

// OR

if (month === 12 || month === 1 || month === 2) console.log("Winter");
else if (month <= 5) console.log("Spring");
else if (month <= 8) console.log("Summer");
else console.log("Fall");

// OR

let season =
    month === 12 || month === 1 || month === 2
        ? "Winter" : month <= 5
            ? "Spring" : month <= 8
                ? "Summer" : "Fall";

console.log(season);
/// condition ? valueIfTrue : valueIfFalse


let price = 0;
let brand = 'Samsung';
let ssd = 128 ;
let color = 'Black';

if (brand === 'iPhone') {
    price += 1000;
    if (ssd === 16) price += 100;
    else if (ssd === 32) price += 150;
    else if (ssd === 64) price += 250;
    else if (ssd === 128) price += 400;
    else if (ssd === 256) price += 500;
    else if (ssd === 512) price += 600;

    if (color !== 'white') price +=100;
}
else {
    price += 750;
    if (ssd === 16) price += 50;
    else if (ssd === 32) price += 100;
    else if (ssd === 64) price += 200;
    else if (ssd === 128) price += 300;
    else if (ssd === 256) price += 400;
    else if (ssd === 512) price += 500;

    if (color !== 'white' && color !== 'black') price +=50; // It was if (color !== 'white' || color !== 'black') price +=50 ... || or is wrong here.. meaning is its not white its not black. two false means in or true and calculation adds 50 dollars. thats why it should be &&. this is debuggers and ours job to find this kind of things.
}

console.log(`Your custon ${brand} with ${ssd} GB SSD and ${color} color is $${price}`)