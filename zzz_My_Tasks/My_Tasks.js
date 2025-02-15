/*
Task 01: Manipulating Strings and Numbers
Requirement:

Create a program that takes the following inputs:
A string that contains a full name (e.g., "John Doe").
A number representing a year (e.g., 1995).
Your task is to:

Extract the first name and last name from the string.
Capitalize the first letter of the first and last name.
Calculate the age of the person based on the current year (2025).
Print the following outputs:
First name: [First Name]
Last name: [Last Name]
Age: [Calculated Age]
*/

let fullName = 'volkan   yokIkinciIsmim tutunculer';
let bornYear = 1991;

let nameParts = fullName.split(/\s+/);
let currentYear = new Date().getFullYear();

console.log(`First name: ${nameParts[0][0].toUpperCase() + nameParts[0].slice(1)}`);

console.log(`Last name: ${nameParts[nameParts.length - 1][0].toUpperCase() + nameParts[nameParts.length - 1].slice(1)}`);

console.log(`Age: ${currentYear - bornYear}`);





function fizzBuzz(start, end){
    let number = Math.floor(Math.random() * (end - start + 1)) + start;
    if (number % 15 === 0){
        return "FizzBuzz";
    }
    else if (number % 5 === 0){
        return "Buzz";
    }
    else if (number % 3 === 0){
        return "Fizz";
    }
    else {
        return number;
    }
}


console.log(fizzBuzz(1, 20));




function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("volkan"));






let r1 = Math.floor(Math.random() * 50) + 1; ======> random number

let r1 = Math.floor(Math.random() * 50) + 1;
console.log(r1);
console.log(r1 % 7 === 0);





function startsVowel(word) {

    return 'aeiouAEIOU'.includes(word[0]);

}

console.log(startsVowel("Tech"));
console.log(startsVowel("Apple"));
console.log(startsVowel("abc"));

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

console.log(isPrime(2));  // true
console.log(isPrime(4));  // false
console.log(isPrime(17)); // true


function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("TechGLobal"));

function isPalindrome(word) {
    return word.split("").reverse().join("") === word;
}

console.log(isPalindrome("vallav"));


function findLargestNUmber(arr){
    return Math.max(...arr);
}

console.log(findLargestNUmber([1, 5, 55, 25]));

function factorial(n){
    if ( n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));


function reverseString(str){
    
    if (reverseString.length === 0) return "";
    return (str.slice(-reverseString.length + 1));
}

console.log(reverseString("volkan"));

