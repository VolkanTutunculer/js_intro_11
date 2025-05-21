// Task 1
console.log("\n----Task 1----");

function countPos(array) {
    let countPositive = 0;
    for (const arr of array) {
        if (arr > 0) {
            countPositive++
        }
    }
    return countPositive;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));


// Task 2
console.log("\n----Task 2----");

function countA(string) {
    return string.split('').filter(strA => strA.toLowerCase().includes('a')).length;
}

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));


// Task 3
console.log("\n----Task 3----");

function countVowels(string) {
    let vowels = ['a', 'e', 'o', 'u', 'i'];
    return string.split('').filter(strVowel => vowels.includes(strVowel.toLowerCase())).length;
}

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"))
console.log(countVowels(""));

// Task 4
console.log("\n----Task 4----");

function countVowels(string) {
    let vowels = ['a', 'e', 'o', 'u', 'i'];
    return string.length - string.split('').filter(strVowel => vowels.includes(strVowel.toLowerCase())).length;
}

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"))
console.log(countVowels(""));

// Task 5
console.log("\n----Task 5----");

function countWords(string) {
    return string.trim().split(/\s+/);
}

console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));

// Task 6
console.log("\n----Task 6----");

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
console.log("\n----Task 7----");

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
console.log("\n----Task 8----");

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
console.log("\n----Task 9----");

function count3OrLess(string) {
    let word = string.trim().split(/\s+/);
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].length <= 3) {
            if (word[i].length === 0) {
                count = 0;
            }
            else count++;
        }
    }
    return count;
}
console.log(count3OrLess("Hello"))
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));


// Task 10
console.log("\n----Task 10----");

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    if (number === 2) {
        return true;
    }
    for (let i = 2; i <= 9; i++) {
        if (number % i === 0 && number !== i) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));



// Task 11
console.log("\n----Task 11----");

function add(arr1, arr2) {
    let sumArr = [];

    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        sumArr.push((arr1[i] || 0) + (arr2[i] || 0));
    }
    return sumArr;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));
console.log(add([], [1, 2, 3]));
console.log(add([4, 5, 6], []));


// Task 12
console.log("\n----Task 12----");

function removeExtraSpaces(string) {
    return string.trim().split(/\s+/).join(' ');
}

console.log(removeExtraSpaces("   Hello Word    "));
console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""));

// Task 13
console.log("\n----Task 13----");

function findClosestTo10(array) {
    let closest;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 10) {
            array[i] = 99;
        }
        if (closest === undefined) {
            closest = array[i];
        }
        for (let j = i + 1; j < array.length; j++) {
            if (Math.abs(10 - array[i]) < Math.abs(10 - closest)) {
                closest = array[i];
            }
            if (Math.abs(10 - array[i]) === Math.abs(10 - closest) && array[i] < closest) {
                closest = array[i];
            }
            if (Math.abs(10 - array[j]) < Math.abs(10 - closest)) {
                closest = array[j];
            }
            if (Math.abs(10 - array[j]) === Math.abs(10 - closest) && array[j] < closest) {
                closest = array[j];
            }
        }
    }

    return closest;
}
console.log(findClosestTo10([10, -13, 5, 70, 15, 57]));
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));
console.log(findClosestTo10([0, -1, -2]));



// Task 14
console.log("\n----Task 14----");

function isEmailValid(email) {
    if (email.indexOf(' ') !== -1) {
        return false;
    }

    let atCount = 0;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            atCount++;
        }
    }
    if (atCount !== 1) {
        return false;
    }

    let parts = email.split('@');
    if (parts[0].length < 2 || parts[1].length < 3) {
        return false;
    }

    let domainParts = parts[1].split('.');
    if (domainParts.length !== 2 || domainParts[0].length < 2 || domainParts[1].length < 2) {
        return false;
    }

    return true;
}


console.log(isEmailValid(""));
console.log(isEmailValid("@gmail.com"));
console.log(isEmailValid("johndoe@yahoo"));
console.log(isEmailValid("johndoe@.com"));
console.log(isEmailValid("a@outlook.com"));
console.log(isEmailValid("johndoe@a.com"));
console.log(isEmailValid("johndoe@@gmail.com"));
console.log(isEmailValid("johndoe@gmail.com"));

// Task 15
console.log("\n----Task 15----");


function isPasswordValid(string) {
    if (string.includes(" ")) {
        return false;
    }
    if (string.length < 8 || string.length > 16) {
        return false;
    }
    if (!string.match(/[a-zA-z]/)) {
        return false
    }
    if (!string.match(/[1-9]/)) {
        return false;
    }
    if (!string.match(/[\W_]/)) {
        return false;
    }
    return true;
}

console.log(isPasswordValid("Abcd1234$"));
console.log(isPasswordValid("abcd"));
console.log(isPasswordValid("Abcd1234"));
console.log(isPasswordValid("Chicago123$"));
console.log(isPasswordValid("Test1234#"));
console.log(isPasswordValid("Invalid Pass"));