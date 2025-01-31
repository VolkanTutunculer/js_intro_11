/*
let fname = 'John';
let lname = 'Doe';
let age = 45;
let vip = false;
*/

// Objects
const person = {

    fname: 'John',
    lname: 'Doe',
    age: 45,
    vi: false,

};

console.log(person);    // { fnasme: 'John', lname: 'Doe', age: 45, vi: false }
console.log(typeof person); // object

let firstName = person.fname;
console.log(firstName); // John
console.log(typeof firstName); // string

console.log(typeof person.age); // number

// how to acces the properties of an object

console.log(person.fname);
console.log(person.age);
//or 
console.log(person['fname']);
console.log(person['age']);

const program = {

    name: 'SDET',
    start: 'Jan 20, 2025',
    duraction: '6 months'

}

program.start = 'Jan 27, 2025';
program['duraction'] = '7 Months';

console.log(program);