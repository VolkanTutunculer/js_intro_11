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


const student = {

    fullname: 'John Doe',
    courses: ['Maath', 'Science'],
    address: {
        street: '123 Abc St',
        number: null,
        city: 'Chicago',
        state: 'IL',
        ZIPCode: '12345 1234'
    }
}

// Adding a property to an existing object

student.address.ZIPCode = 'M4P 1A5';
student.age = 25;
student['favDish'] = 'Pizza';

console.log(student);

console.log(student.courses[1]);

// remove some properties from an existing object

delete student.favDish;

console.log(student); // { fullname: 'John Doe', courses: [ 'Maath', 'Science' ], address: { street: '123 Abc St', number: null, city: 'Chicago', state: 'IL', ZIPCode: 'M4P 1A5' }, age: 25 }