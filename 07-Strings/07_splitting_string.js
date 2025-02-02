let str1 = 'Today is Sunday';

const words = strl.split('');

console.log(words); // [ 'Today', 'is', Sunday ]

console.log(words[0]); // 'Today'

console.log(words [2].slice(0, 3)); // 'Sun'



let str2 = '+1 (322) 000 0000';

console.log(str2.split(' ')); //[ '+1', '(322)', '000', '0000' ]
console.log(str2.split(' ').length); //4

console.log(str2.split(' ')[0] === '+1'); // true



let str3 = 'C:\\Users\\Techgloba\\Desltop\\MyFolder'
console.log(str3.split('\\'));

let str4 = 'One word or two';
console.log(str4.split('word')); // ['One ', ' or two']

let str5 = 'Apple';
console.log(str5.split('')); // [ 'A', 'p', 'p', 'l', 'e' ]