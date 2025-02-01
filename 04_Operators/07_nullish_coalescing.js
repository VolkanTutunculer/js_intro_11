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