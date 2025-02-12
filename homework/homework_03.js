const { getRandomNumber } = require('./../utils/MathHelper.js')
// TASK 1

num1 = getRandomNumber(1, 100);
num2 = getRandomNumber(1, 100);
num3 = getRandomNumber(1, 100);

console.log((num1 + num2 + num3) / 3 <= 50)

/*
console.log(num1);
console.log(num2);
console.log(num3);
*/

// TASK 2

number1 = getRandomNumber(1, 3);
number2 = getRandomNumber(1, 3);
number3 = getRandomNumber(1, 3);

function match(number1, number2, number3) {
    if (number1 === number2 && number2 === number3) {
        return 'TRIPLE MATCH';
    }
    else if (number1 === number2 || number1 === number3 || number2 === number3) {
        return 'DOUBLE MATCH';
    }
    else {
        return 'NO MATCH';
    }
}
/*
console.log(match(number1, number2, number3));
console.log(number1);
console.log(number2);
console.log(number3);
*/

//TASK 3

function hasA(word) {
    return /^a/i.test(word);
}
console.log(hasA("arda"));
console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));

// TASK 4

function doubleOrTripleWord(stringWord) {
    if (stringWord.length % 2 === 0){
        return (`"${stringWord+stringWord+stringWord}"`);
    }

    else if (stringWord.length % 2 === 1 && /[1-9a-zA-Z]/.test(stringWord)) {
        return (`"${stringWord+stringWord}"`);
    }
    else {
        return `"${stringWord}"`;
    }
}

console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));

// TASK 5

function firstWord(string) {
    if (/[a-zA-Z]/.test(string)){
    return (string.trim().split(/\s+/).find(word =>/[a-zA-Z]/.test(word))); 
    }
    else {
        return `"${""}"`;
    }
}
/*
console.log(firstWord("  I   have     pen"))
console.log(firstWord("55555 my phone number"))
console.log(firstWord("Hello World"));
console.log(firstWord("I like JavaScript"));
console.log(firstWord("Hello"));
console.log(firstWord(""));
console.log(firstWord(" "));
*/


// TASK 6

function lastWord(string) {
    if (/[a-zA-Z]/.test(string)){
    return (string.trim().split(/\s+/).findLast(word =>/[a-zA-Z]/.test(word))); 
    }
    else {
        return `"${""}"`;
    }
}
console.log(lastWord("  I   have     pen"))
console.log(lastWord("my phone number 5555"))
console.log(lastWord("Hello World"));
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello"));
console.log(lastWord(""));
console.log(lastWord(" "));


// TASK 7

function fLastWord(str) {
    if (/[a-zA-Z]/.test(str)){
        return ((str.trim().split(/\s+/).find(word =>/[a-zA-Z]/.test(word)))+(str.trim().split(/\s+/).findLast(word =>/[a-zA-Z]/.test(word)))); 
    }
    else {
        return `"${""}"`;
    }
}
console.log(fLastWord("  I   have     pen"))
console.log(fLastWord("5555  my phone number 5555"))
console.log(fLastWord("Hello World"));
console.log(fLastWord("I like JavaScript"));
console.log(fLastWord("Hello"));
console.log(fLastWord(""));
console.log(fLastWord(" "));


// TASK 8

function startVowel (str1) {
    return /^[aeiou]/i.test(str1)
}

console.log(startVowel("Hello"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel(" "));
console.log(startVowel("123"));


