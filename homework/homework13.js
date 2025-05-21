// Task 1
console.log("----Task 1----");

function countVC(string) {
    let counterV = 0;
    let counterC = 0;

    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i].toLowerCase())) {
            counterV++;
        }
    }

    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase().match(/[a-z]/)) {
            counterC++;
        }
    }

    let result = {
        vowels: counterV,
        consonants: counterC - counterV,
    };
    return result;
}

console.log(countVC("Hello"));
console.log(countVC("Programming"));
console.log(countVC("123AbC"));
console.log(countVC("123!@#xyz"));
console.log(countVC(""));

// Task 2
console.log("----Task 2----");

function countChars(string) {
    let letterCount = 0;
    let numberCount = 0;
    let specialCount = 0;

    let newStr = string.replace(/\s+/g, "").toLowerCase();

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i].match(/[a-z]/)) letterCount++;
        else if (newStr[i].match(/[0-9]/)) numberCount++;
        else if (newStr[i].match(/[^a-z0-9]/)) specialCount++;
    }

    let allCount = {};
    if (letterCount > 0) allCount.letters = letterCount;
    if (numberCount > 0) allCount.numbers = numberCount;
    if (specialCount > 0) allCount.specials = specialCount;

    return allCount;
}

console.log(countChars("Hello"));
console.log(countChars("Programming 123"));
console.log(countChars("123AbC!@#"));
console.log(countChars("0987654321"));
console.log(countChars("     "));
console.log(countChars(""));

// Task 3
console.log("----Task 3----");

function maxOccurrences(string) {
    let newStr = string.replace(/\s/g, "");
    if (newStr.length === 0) {
        return "";
    }

    let counts = {};
    let maxCount = 0;
    let maxChar = "";

    for (let i = 0; i < newStr.length; i++) {
        let char = newStr[i];
        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }

        if (counts[char] > maxCount) {
            maxCount = counts[char];
            maxChar = char;
        }
    }

    return maxChar;
}
console.log(maxOccurrences("Hello"));
console.log(maxOccurrences("Occurrences"));
console.log(maxOccurrences("    ab    "));
console.log(maxOccurrences("12   3   21"));
console.log(maxOccurrences("      "));
console.log(maxOccurrences(""));

// Task 4
console.log("----Task 4----");

function starOut(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "*") continue;

        if (i > 0 && string[i - 1] === "*") continue;

        if (i < string.length - 1 && string[i + 1] === "*") continue;

        result += string[i];
    }
    return result;
}

console.log(starOut("ab*cd"));
console.log(starOut("ab**cd"));
console.log(starOut("xm*sm*sy"));
console.log(starOut("abc"));
console.log(starOut("***"));
console.log(starOut("   "));
console.log(starOut(""));

// Task 5
console.log("----Task 5----");
function romanToInt(string) {

    const romanNumbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    let sum = 0;

    for (let i = 0; i < string.length; i++) {
        let firstNum = romanNumbers[string[i]];

        let secondNum = romanNumbers[string[i + 1]];

        if (secondNum !== undefined && firstNum < secondNum) {
            sum -= firstNum;
        } 
        
        else {
            sum += firstNum;
        }
    }
    return sum;
}

console.log(romanToInt("I"));
console.log(romanToInt("IV"));
console.log(romanToInt("CXII"));
console.log(romanToInt("MMM"));
console.log(romanToInt("MMMDCCCLXXXVIII"));
console.log(romanToInt("MDCLXVI"));


