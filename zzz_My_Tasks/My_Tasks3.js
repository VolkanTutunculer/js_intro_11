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

let max1 = 50
let min1 = 1
function randomNum(num) {
    let randomNum = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
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

let minimum = 1;
let maximum = 10;

function randomNum() {
    let random1 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    let random2 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    let random3 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

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


// Count the total occurrences of letter o in TechGlobal School  -> 3

let name = "Tech Global School";
let counter = 0;
for (let i = 0; i<name.length; i++){
    if (name[i].toLowerCase() === 'o'){
        counter++;
    }
}

console.log(counter);

// Output all the odd numbers from 1 to Random Number (both inclusive) -> 1 3 5 7 9 ….

let random = Math.floor(Math.random()*(9-1+1))+1;
console.log(random);
let arr =[]
for (let i = 1; i <= random; i++){
    if (i % 2 !== 0){
        arr.push(i);
    }
}

console.log(arr)


for (let i = 1; i<=10; i++){
    console.log(i);
}

///////////
let arr2 = [];
for (let i = 100; i>=0; i--){
    arr2.push(i)
}

console.log(arr2)

for (let char of arr2){
    if (char % 2 === 0){
        console.log(char);
    }
}
//////////////

let sum3 = 0;

for (let i=1; i<=5; i++){
    sum3 += i;
}

console.log(sum3)

let sum2 = 0;
for(let i=10; i<=15; i++){
    sum2 +=i;
}
console.log(sum2)

////// 
/*
Assume that we are playing a game and one person in the class is just writing a number on a paper and others are trying to guess the number 
NOTE: number can only be between 1 to 10 ( 1 and 10 are included)
See how many attempts it is going to take to find the number?
*/
let guessNum = Math.floor(Math.random()*(10-1+1))+1;

let tryGuess = 1;

for(i=Math.floor(Math.random()*(10-1+1))+1; i<=Math.floor(Math.random()*(10-i+1))+i; i++){
    if (i === guessNum){
        break;
    }
    else {
        tryGuess++;
    }
}
console.log(guessNum);
console.log(tryGuess);

//
/*
Assume that we are playing a game and one person in the class is just writing a number on a paper and others are trying to guess the number 
NOTE: number can only be between 1 to 10 ( 1 and 10 are included)
See how many attempts it is going to take to find the number?
*/

let maxNumber = 50;
let minNumber= 1;
let randNum;
let gameNum = Math.floor(Math.random()*(maxNumber-minNumber+1))+minNumber;
console.log(`Tutan sayi ${gameNum}`);
let tries = 1;

while (randNum !== gameNum){
    randNum = Math.floor(Math.random()*(maxNumber-minNumber+1))+minNumber;
    console.log(`tahminim ${randNum}`)
    tries++;
}


console.log(`Tahmin sayisi ${tries}`);

/////////////
