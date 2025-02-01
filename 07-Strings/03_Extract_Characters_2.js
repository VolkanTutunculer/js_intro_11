let company = 'TechGlobal';

// Get char using property access

company[0]; // T
console.log(company[0]); // 'T'
console.log(company[8]); // 'a'

// Get first and last chars

let greeting = 'Tech';

let firstChar = greeting[0];
let lastChar = greeting[greeting.length - 1];

console.log(firstChar); // 'T'
console.log(lastChar); // 'h'

// charAt()

let city = 'Chicago';

console.log(city.charAt(2)); // i
console.log(city.charAt(city.length - 1)); // o

// at()

let color = 'Purple';

console.log(color.at(0)); // P
console.log(color.at(color.length - 1)); // e

// the differences are EDGE CASES

// EDGE CASES

let name = 'Max';

console.log(name[-1]); // undefined
console.log(name[3]); // undefined

console.log(name.charAt[-1]); // undefined
console.log(name.charAt[3]); // undefined

console.log(name.at(-1)); // x
console.log(name.at(3)); // undefined

console.log(name.at(-1)); //x
console.log(name.at(-2)); //a
console.log(name.at(-3)); //M
console.log(name.at(-4)); // underfined

// Get first and last chars in a string

let brand = 'Apple';
let fChar = brand[0];
let lChar = brand.at(-1);

/*
charAt()
TASK: used to retrieve a char from string at specified index
    note; if the index is not valid for the string, it returns undefined
ARGUMENTS: yes, it takes an index
RETURN: returns a char as a string
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: instance
*/

/*

at()
TASK: sed to retrieve a char from string at specified index
    note: index could be negative as well (counting backworks)
ARGUMENTS: yes, it takes an index
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: instance
*/
