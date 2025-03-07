let min = 1;
let max = 100;

let randomNum = Math.floor(Math.random()*(max-min+1))+min;

console.log(randomNum);

function evenOrrOdd(number){
    if (number % 2 === 0){
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
        return n * factorial(n- 1);
    }
}

console.log(factorial(3));


function factor(n){
    if (n === 0 || n=== 1){
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

function startVowel(str){
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