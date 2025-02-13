/*
Task01

Requirement:
Assume you are given a number between 1 and 100 
(both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100

Test data 1: 34
Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter

Test data 2: 76
Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/

const num = 57
if (num > 0 && num <= 25) {
    console.log(`${num} is in the 1st half \n${num} is in the 1st quarter`);
}
else if (num > 25 && num <= 50) {
    console.log(`${num} is in the 1st half \n${num} is in the 2st quarter`);
}
else if (num > 51 && num <= 75) {
    console.log(`${num} is in the 2nd half \n${num} is in the 3th quarter`);
}
else if (num > 75 && num <= 100) {
    console.log(`${num} is in the 2nd half \n${num} is in the 4th quarter`);
}
else {
    console.log("not in rage")
}

// OR

switch (true) {
    case num > 0 && num <= 25: {
        console.log(`${num} is in the 1st half \n${num} is in the 1st quarter`);
        break;
    }
    case num > 25 && num <= 50: {
        console.log(`${num} is in the 1st half \n${num} is in the 2st quarter`);
        break;
    }
    case num > 51 && num <= 75: {
        console.log(`${num} is in the 2nd half \n${num} is in the 3th quarter`);
        break;
    }
    case num > 75 && num <= 100: {
        console.log(`${num} is in the 2nd half \n${num} is in the 4th quarter`);
        break;
    }
    default: console.log("not in rage")


}

/*
Task02
Requirement:
Assume you are given 3 numbers between 1 and 100
(both 1 and 100 are included).
Print true if they are all even numbers.
Otherwise, print false
Test data 1: 2, 4, 6
Expected result 1: true
Test data 2: 68, 44, 2
Expected result 2: true
Test data 3: 10, 20, 25
Expected result 3: false
Test data 4: 51, 67, 99
Expected result 4: false
const num1 = 2;
const num2 = 4;
const num3 = 6;
*/




const num1 = 2;
const num2 = 4;
const num3 = 6;

if (num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0) {
    console.log(true)
}
else {
    console.log(false)
}

// OR 

function even(num1, num2, num3) {
    if (num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(even(2, 4, 6));


/*
Task03

Requirement:
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace 
or special.

Test data 1: "a"
Expected result 1:
"a"  is a letter

Test data 2: "5"
Expected result 2:
"5"  is a digit

Test data 2: "$"
Expected result 1: 
"$"  is a special character

Test data 4: " "
Expected result 4:
" " is a whitespace
*/

function typeOfChar(char) {
    if ((char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)) {
        return `"${char}"  is a letter`;
    }
    else if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
        return `"${char}"  is a digit`;
    }
    else if ((char.charCodeAt(0) === 32)) {
        return `"${char}" is a whitespace`;
    }
    else {
        return `"${char}"  is a special character`;
    }
}

console.log(typeOfChar("a    "));
console.log(typeOfChar("5"));
console.log(typeOfChar("&"));
console.log(typeOfChar("  "));

// OR 

function typeOfChar(char) {
    if (char.match(/[a-zA-Z]/)) {
        return `"${char[0]}"  is a letter`;
    }
    else if (char.match(/[0-9]/)) {
        return `"${char[0]}"  is a digit`;
    }
    else if (char.match(/\s/)) {
        return `"${char}" is a whitespace`;
    }
    else {
        return `"${char[0]}"  is a special character`;
    }
}

console.log(typeOfChar("a      "));
console.log(typeOfChar("5"));
console.log(typeOfChar("&"));
console.log(typeOfChar("  "));

// OR 
let str = '#';
if (str[0].match(/[a-zA-Z]/)) {
    console.log(`"${str}" is a letter`);
} else if (str[0].match(/[0-9]/)) {
    console.log(`"${str}" is a digit`);
} else if (str[0].match(/\s/)) {
    console.log(`"${str}" is a whitespace`);
} else {
    console.log(`"${str}" is a special character`);
}

/*
Task04
Write a function named hasBlue() which takes a string argument
and returns true if the string has an occurrence of blue word,
returns false otherwise.
NOTE: Ignore upper/lower cases.
Examples:
hasBlue("Hello World")    -> false
hasBlue("Javabluescript")    -> true
hasBlue("Tech Blue Global")    -> true
hasBlue("1234")    -> false
hasBlue("ABLUEC")    -> true
*/

function hasBlue(string) {
    if (string.toLowerCase().match("blue")) {
        return true;
    }
    else {
        return false;
    }
}

// OR -- better one on below

function hasBlue(string){
    return string.toLowerCase().includes("blue")
}

console.log(hasBlue("Hello World"));
console.log(hasBlue("Javabluescript"));
console.log(hasBlue("Tech Blue Global"));
console.log(hasBlue("1234"));
console.log(hasBlue("ABLUEC"));

/*

*/

function startT(string) {
    return string[0].toLowerCase() === 't';
}

// OR

const startT = word => {
    return word.toLowerCase().startsWith('t')
}

// OR

const startT = word => {
    return (/^[t]/i.test(word))
}

console.log(startT("Hello World"));
console.log(startT("typescript"));
console.log(startT("TechGlobal"));
console.log(startT("1234"));
console.log(startT("ABC"));



