/*
Assume that you are given a string of any length

Get the last 5 characters from it

Morning     -> rning
Saturday    -> urday
Hello       -> Hello
*/

let str1 = 'Saturday';

let lastFive = str1.slice(-5); // Recommended
//or
let lastFive2 = str1.slice(str1.length - 5);

console.log(lastFive);
console.log(lastFive2);


