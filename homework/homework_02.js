// TASK 1 

let str1 = 5, str2 = 2;

console.log(`The sum of ${str1} and ${str2} is = ${(str1 + str2)}`);
console.log(`The product of ${str1} and ${str2} is = ${(str1 * str2)}`);
console.log(`The division of ${str1} and ${str2} is = ${(str1 / str2)}`);
console.log(`The subtraction of ${str1} and ${str2} is = ${(str1 - str2)}`);
console.log(`The remainder of ${str1} and ${str2} is = ${(str1 % str2)}`);
console.log(`The exponentiation of ${str1} and ${str2} is = ${(str1 ** str2)}`);

// TASK 2

let s1 = 200, s2 = -50;

console.log(`The greatest value is = ` + Math.max(s1, s2));
console.log(`The smallest value is = ` + Math.min(s1, s2));
console.log(`The average is = ` + (s1 + s2)/2);
console.log(`The absolute differance is = ` + Math.abs(s1 - s2));

// TASK 3

let start = 1;
let end = 50;

let num1 = Math.floor(Math.random() * (end - start + 1)) + start;
let num2 = Math.floor(Math.random() * (end - start + 1)) + start;

console.log(`The absolute difference between numbers is = ` + Math.abs(num1 - num2));

// TASK 4

let strts = 1;
let ends = 50;

let n1 = Math.floor(Math.random() * (ends - strts + 1)) + strts;
let n2 = Math.floor(Math.random() * (ends - strts + 1)) + strts;
let n3 = Math.floor(Math.random() * (ends - strts + 1)) + strts;
let n4 = Math.floor(Math.random() * (ends - strts + 1)) + strts;
let n5 = Math.floor(Math.random() * (ends - strts + 1)) + strts;

/*
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
*/

console.log(`The max value = ` + Math.max(n1, n2, n3, n4, n5));
console.log(`The min value = ` + Math.min(n1, n2, n3, n4, n5));

// TASK 5

let startNum = 50;
let endNum = 100;

let number1 = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
let number2 = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
let number3 = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;

console.log(`The number 1 = ${number1}`);
console.log(`The number 2 = ${number2}`);
console.log(`The number 3 = ${number3}`);
console.log(`The sum of numbers is = ${number1 + number2 + number3}`);

// TASK 6

let sNumber = 1;
let eNumber = 100;
let greater = 25;

let numberOne = Math.floor(Math.random() * (eNumber - sNumber + 1)) + sNumber;
let numberTwo = Math.floor(Math.random() * (eNumber - sNumber + 1)) + sNumber;
let numberThree = Math.floor(Math.random() * (eNumber - sNumber + 1)) + sNumber;

/*
console.log(numberOne);
console.log(numberTwo);
console.log(numberThree);
*/

console.log(numberOne > greater && numberTwo > greater && numberThree > greater);

// TASK 7

let name = 'David';

console.log(`The length of the name is = ${(name.length)}`);
console.log(`The last character in the name is = ${(name.at(-1))}`);
console.log(`The first 3 characters in the name are = ${(name.slice(0, 3))}`)
console.log(`The first 3 characters in the name are = ${(name.slice(name.length - 3))}`)