let v1 = 3;
let v2 = '3';
let v3 = 5;
let v4 = '5';
 
console.log(v1 < v3); // true
console.log(v1 <= v3); // true

console.log(v1 == v3); // false  // compare this if their value is equal or not
console.log(v1 === v3); // false // compare this if their data type is equal or not

// == compare only value
// === compare both value and data types (strick comparision)

console.log(v1 == v2); // true
console.log(v1 === v2); // false

console.log(true == 1); // true
console.log(true === 1); // false

console.log('hello' != 'HELLO'); // true

console.log(3 != '3'); // false
console.log(3 !== '3'); // true 