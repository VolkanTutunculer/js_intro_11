// String

let fullname = 'John Doe';

console.log(fullname);

console.log(typeof fullname);

console.log(typeof ''); // because it has '', still this is string  (empty string)


// Number

let wholeNumber = 10;
let decimalNumber = 15.99;

let numberOfStudents = 20;
let subscriptionFee = 19.99;

console.log(numberOfStudents);
console.log(subscriptionFee);

console.log(typeof numberOfStudents);
console.log(typeof subscriptionFee);


// BigInt

let biggrstNumber = Number.MAX_SAFE_INTEGER;
let smallestNumber = Number.MIN_SAFE_INTEGER;

console.log(biggrstNumber);
console.log(smallestNumber);

let number1 = 9007199254740991;
let number2 = 90071992547409917n;
let number3 = BigInt('90071992547409917');

console.log(number1);
console.log(number2);
console.log(number3);

console.log(typeof number1); // number
console.log(typeof number2); // bigint
console.log(typeof number3); // bigint

console.log(90071992547409917n + 5); // bigint req bigint to be used on calcutation
console.log(90071992547409917n + 5n); // its the right wayy to do it

// boolean

let b1 = true;
let b2 = false;

console.log(b1);
console.log(b2);

console.log(typeof b1);
console.log(typeof b2);

let age = 15;

let allowed = age >= 16;

console.log(allowed);

/*if (age >= 16) {
    console.log('you are allowed')
}
else {
    console.log('you are not allowed')
}
*/

let excamScore = 75

let pass = excamScore >= 65;

console.log(pass);

console.log(typeof (5 == 5)); // boolean


// What is difference between undefined and null ??????
// undefined is for variables that are declared but not assigned a value
// null is used intencially yto point absence of data

// undefined
let today;
console.log.log(today)
console.log(typleof today);

// null

let SSN = null;
console.log(SSN);
console.log(typeof SSN);


// Symbol
let s1 = Symbol('Foo');
let s2 = Symbol('SOS');
let s3 = Symbol('XOX');

console.log(s1);
console.log(s2);
console.log(s3);

console.log(typeof s1); // symbol
console.log(typeof s2); // symbol
console.log(typeof s3); // symbol