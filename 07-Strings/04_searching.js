// starstWith () vs endsWith()

let company = 'TechGlobal';

console.log(company.startsWith('T')); // true
console.log(company.startsWith('Tech')); // true
console.log(company.startsWith('TechGlobal')); // true

console.log(company.startsWith('t')); // false
console.log(company.toLowerCase().startsWith('t')); // true

console.log(company.endsWith('l')); // True
console.log(company.endsWith('Global')); // True
console.log(company.endsWith('TechGlobal')); // True

console.log(company.startsWith('') && company.endsWith('')); // True

console.log(company.toUpperCase().startsWith('TECH') && company.toLowerCase().endsWith('l')); // True


/*
startsWith() method
TASK: used to check if string starts with another substring
ARGUMENTS: yes, it takes a string to check
RETURN: returns a boolean (true if string starts with substring or false otherwise)
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

/*
endsWith() method
TASK: used to check if string ends with another substring
ARGUMENTS: yes, it takes a string to check
RETURN: returns a boolean (true if string ends with substring or false otherwise)
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

// includes () method

let quote = `Let's do it`;

console.log(quote.includes ('')); // true
console.log(quote.includes('')); // true
console.log(quote.includes('do')); // true
console.log(quote.includes('let')); // false

console.log(quote.includes('let')); // false
console.log(quote.includes('it')); // false

/*
includes() method
TASK: checks if the string contains another substring
ARGUMENTS: it takes another substring to check
RETURN: returns a boolean (true if string contains the substring or false otherwise)
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/