let school = 'TechGlobal School';

let s1 = school.slice(0, 4); // 'Tech'
let s2 = school.slice(4, 10); // 'Global'
let s3 = school.slice(0, 10); // 'TechGlobal'
let s4 = school.slice(11, 17); // 'School'

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

console.log(school.slice(4)); // 'Global school'

let city = 'Los Angeles';

console.log(city.substring(0, 3));
console.log(city.substring(4));

console.log('Apple'.slice(2, 10)); // 'ple'
console.log('Apple'.substring(2, 10)); // 'ple'
console.log('Orange'.slice(-10, 10)); // 'Orange'
console.log('Orange'.substring(-10, 10)); // 'Orange'

console.log('Banana'.slice(1, -1)); // 'anan'
console.log('Banana'.slice(1, -2)); // 'ana'
console.log('Banana'.slice(0, -5)); // 'B'
console.log('Banana'.slice(0, -6)); // ''
console.log('Banana'.slice(0, 0)); // ''

console.log('Banana'.substring(1,-1)); // 'B'
console.log('Banana'.substring(0, 0)); // ''
console.log('Banana'.substring(3,0)); // 'Ban'

/*
slice()
TASK: used to extract substrings from a string
ARGUMENTS: takes one or two index arguments
RETURN: returns a substring including startIndex, excluding endIndex
NOTE: it also allows negative indexes, and count backward in this case
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

/*
NOTE: We'll always use slice() method to extract substrings
If you have 2 positive index:

if startIndex >= endIndex, then your result is always ''
'Hello'.slice(3, 2); // ''
'Hello'.slice(3, 3); // ''

if endIndex is not provide, means start with startIndex and go all the way to the end.
'Hello'.slice(2); // 'llo'

slice() method also works with negative indices (indexes) 
In this case, you'll go backward
'Hello'.slice(-1); // 'o'
'Hello'.slice(-2); // 'lo' // it will give last 2 character

'Chicago'.slice(-5, -2); // 'ica'
'Chicago'.slice(-1, -4); // ''

'Miami'.substring(-2, -4); // ''
if substring has - bot array always gives 0

'Miami'.substring(2, 0); // 'Mi'
*/
