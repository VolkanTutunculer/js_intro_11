/*
FALSY VALUES: 0, '', undefined, null, Nan, false
let result = value1 || value2;
if value1 is falsy, then result is always value2
if value2 is falsy, then result is always value1 
// Falsy value den hic birinin sorguda gelmeyecegini garantiler

let result = value1 ?? value2;
if value1 is undefinedor null, then result is always value2
if value2 is not undefined or null, then result is always value1
// sadece undefined yada null un sorguda gelmeyecegini garantiler

*/
let nameInServer = null;

nameInServer = nameInServer ?? 'customer';
console.log(`Dear ${nameInServer}`);

/*
OBJECT: all built-in objects in programming languages have their own properties and functions.

properties: information about the object what it has

functions: abilities of the object what it does

Number.MAX_SAFE_INTEGER; // prop

Number.MIN_SAFE_INTEGER; // prop

Math.PI; // 3.14

Math.max(1, 2); // 2

parantez varsa fonksiyon




*/