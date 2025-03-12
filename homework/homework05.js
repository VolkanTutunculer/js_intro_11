// Task 1
console.log("----Task 1----");

function countPos(array){
    let countPositive = 0;
    for(const arr of array){
        if (arr > 0){
            countPositive++
        }
    }
    return countPositive;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]) );


// Task 2
console.log("----Task 2----");

function countA(string){
    return string.split('').filter(strA => strA.toLowerCase().includes('a')).length;
}

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));


// Task 3
console.log("----Task 3----");

function countVowels(string) {
    let vowels = ['a', 'e', 'o', 'u', 'i'];
    return string.split('').filter(strVowel => vowels.includes(strVowel.toLowerCase())).length;
}

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"))
console.log(countVowels(""));

// Task 4
console.log("----Task 4----");

function countVowels(string) {
    let vowels = ['a', 'e', 'o', 'u', 'i'];
    return string.length - string.split('').filter(strVowel => vowels.includes(strVowel.toLowerCase())).length;
}

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"))
console.log(countVowels(""));

// Task 5
console.log("----Task 5----");

function countWords(string){
    return string.trim().split(/\s+/);
}

console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));

// Task 6
console.log("----Task 6----");

function factorial(number) {
    if (number === 0) {
        return 1;
    }
    else {
        return number * (factorial(number - 1));
    }
}

console.log(factorial(5));

// Task 7
console.log("----Task 7----");

function isPalindromel(string) {
const word = string.toLowerCase();
const reverseWord = word.split('').reverse().join('');
return word === reverseWord;
}

console.log(isPalindromel("Hello"));
console.log(isPalindromel("Kayak"));
console.log(isPalindromel("civic"));
console.log(isPalindromel("abba"));
console.log(isPalindromel("ab  a"));
console.log(isPalindromel("123454321"));
console.log(isPalindromel("A"));
console.log(isPalindromel(""));

// Task 8
console.log("----Task 8----");

function countMultipleWords(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].trim().includes(" ")) {
            count++;
        }
    }
    return count;
}

console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo"]));
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   "]));
console.log(countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "]));
console.log(countMultipleWords([]));


// Task 9
console.log("----Task 9----");