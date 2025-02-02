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

/*
Assume that you are given a string of any length

Get the first 3 characters and the last 3 characters
Then, concatenate these in a new string

JavaScript      -> Javipt
Hello           -> Helllo
123             -> 123123
*/

let str2 = 'Hello';

let newString = `${str2.slice(0, 3)}${str2.slice(-3)}`;

console.log(newString);