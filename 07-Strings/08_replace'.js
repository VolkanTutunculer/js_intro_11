let str = '123 street 123'

let strReplaced = str.replace('123', '###'); // always replace the first one
let strReplacedAll = str.replaceAll('123', '###'); // replace all '123'

console.log(strReplaced);
console.log(strReplacedAll);

/*
replace() method
TASK: replaces the first found occurrence of searchString with another string
ARGUMENTS: 2 args, searchString, newValue
RETURN:returns a new string with replacement applied
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

/*
replace() method
TASK: replaces all the found occurrence of searchString with another string
ARGUMENTS: 2 args, searchString, newValue
RETURN:returns a new string with replacement applied
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

// EDGE
let str1 = 'Today is Saturday';
console.log(str1.replace('Saturday', 'Monday')); // if can not find noting will change

console.log(str1.replaceAll('day', 'XXX')); //ToXXX is SaturXXX
