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
    return { vowels: counterV, consonants: counterC - counterV };
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
    
    let allCount = {}
    if (letterCount > 0) allCount.lettersAmount = letterCount;
    if (numberCount > 0) allCount.numbersAmount = numberCount;
    if (specialCount > 0) allCount.specialsAmount = specialCount;

    return allCount;
}

console.log(countChars("Hello"));
console.log(countChars("Programming 123"));
console.log(countChars("123AbC!@#"));
console.log(countChars("0987654321"));
console.log(countChars("     "));
console.log(countChars(""));

