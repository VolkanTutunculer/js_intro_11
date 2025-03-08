let min = 1;
let max = 100;

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNum);

function evenOrrOdd(number) {
    if (number % 2 === 0) {
        return "EVEN";
    }
    else {
        return "ODD"
    }
}

console.log(evenOrrOdd(randomNum));




function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(3));


function factor(n) {
    if (n === 0 || n === 1) {
        return 1;

    }
    else {
        return n * factor(n - 1);
    }
}
console.log(factor(7));

function reverseString(string) {
    string = string.trim();

    if (string.length < 2) {
        return "";
    }
    let reversed = [];

    for (let i = string.length - 1; i >= 0; i--) {
        reversed.push(string[i]);
    }
    return reversed.join("")
}

console.log(reverseString("Tech Global"));


function replaceFirstLastWord(str) {
    str = str.trim();
    if (str.length < 2) {
        return "";
    }
    return str[str.length - 1] + str.slice(1, str.length - 1) + str[0]
}

console.log(replaceFirstLastWord('volkan'))

/*
Write a function named as startVowel() which takes a string word as an argument and returns true if given string starts with a vowel, and false otherwise when invoked. NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U

Examples:
startVowel("Hello")   	-> false
startVowel("Apple")   	-> true
startVowel("orange")    -> true
startVowel("")   	    -> false
startVowel("	")   	-> false
startVowel("123")   	-> false
*/

function startVowel(str) {
    let vowels = ('aeiouAEIOU')
    return vowels.includes(str[0])
}
console.log(startVowel("Hello"));


function sumOfDigits(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == Number(str[i])) {
            sum += Number(str[i])
        }

    }
    return sum;
}


console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits("John's age is 29"));
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits(""));

let max = 50
let min = 1
function randomNum(num) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNum);
    if (randomNum % 5 === 0) {
        return true;
    }
    else {
        return false
    }
}
console.log(randomNum());
console.log(randomNum());


let maxNum = 50;
let minNum = 1;

function randomNum1() {
    let radomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    console.log(radomNum);
    if (radomNum % 7 === 0) {
        return true;
    }
    else return false;
}
console.log(randomNum1());

let min = 1;
let max = 10;

function randomNum() {
    let random1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let random2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let random3 = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log(random1);
    console.log(random2);
    console.log(random3);

    let average = ((random1 + random2 + random3) / 3);
    return average.toFixed();
}

console.log(randomNum());

/*

Write a function named as shorter() which takes two string words as arguments and returns the string that has less characters when invoked.
NOTE: If both of the words have the same length, then return the second string.

Examples:
shorter("Tech", "Global")	-> "Tech"
shorter("Hello", "Hi")		-> "Hi"
shorter("Hello", "World")	-> "World"

*/

function shorter(str1, str2) {
    let shortString = '';
    if (str1.length < str2.length) {
        shortString = str1;
    }
    else if (str1.length > str2.length) {
        shortString = str2;
    }
    else shortString = str2
    return shortString;
}

console.log(shorter("Tech", "Global"));
console.log(shorter("Hello", "Hi"));
console.log(shorter("Hello", "World"));





function randomNumber() {
    let max = 3
    let min = 1

    random1 = Math.floor(Math.random() * (max - min + 1)) + min;
    random2 = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log(random1);
    console.log(random2);

    if (random1 === random2) return true;
    else return false;
}

console.log(randomNumber());


/*
Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked. NOTE: Mathematically, the factorial of a non-negative integer n is defined as:

n! = n * (n-1) * (n-2) * ... * 2 * 1
Assume you will not be given a negative number.

Examples:
factorial(5)   	-> 120
factorial(4)  	-> 24
factorial(0)  	-> 1
factorial(1)  	-> 1
*/

function factorial(n) {

    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return (n * (factorial(n - 1)))
    }

}

console.log(factorial(3));


/*
Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers​.

Examples:
averageOfEdges(0, 0, 0)      -> 0
averageOfEdges(0, 0, 6)      -> 3
averageOfEdges(-2, -2, 10)   -> 4
averageOfEdges(-3, 15, -3)   -> 6
averageOfEdges(10, 13, 20)   -> 15
*/

function averageOfEdges(num1, num2, num3) {
    return (Math.max(num1, num2, num3) + Math.min(num1, num2, num3)) / 2
}


console.log(averageOfEdges(0, 0, 0))
console.log(averageOfEdges(0, 0, 6))
console.log(averageOfEdges(-2, -2, 10))
console.log(averageOfEdges(-3, 15, -3))
console.log(averageOfEdges(10, 13, 20))

/*
Write a function named reverseStringWords() which takes a string as an argument and returns the string back with each word separately reversed when invoked. NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World")   		-> "olleH dlroW"
reverseStringWords("I like JavaScript")   	-> "I ekil tpircSavaJ"
reverseStringWords("Hello")   		        -> "olleH"
reverseStringWords("")   			        -> ""
reverseStringWords("	")   			    -> ""
*/
