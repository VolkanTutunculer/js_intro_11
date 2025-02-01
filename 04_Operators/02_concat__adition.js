let n1 = 3 ;
let n2 = '5';
let n3 = 4;
let n4 = '10';

console.log(n1 + n2); // 35
console.log(n1 + n3 + n4 + n2); // 7105
console.log(n1 + (n3 + n4) + n2); // 34105

console.log(n2 * n1); // 15 // JS converts the string to a number

console.log(n4 / n2); // 2

console.log('Hello' / 2); // NaN
console.log('Hello' - 'Hi'); // NaN

console.log(5 * true); // 5 // true is converted to 1
console.log(5 * false); // 0 // false is converted to 0

console.log(5 * ''); // 0 // empty string is converted to 0
console.log(5 * '   '); // 0 // empty space is converted to 0