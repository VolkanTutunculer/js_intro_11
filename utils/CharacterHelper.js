/**
 * 
 * @param {*} char must be a single char
 * @returns 
 */

function isDigit(char) {
   return /^\d$/.test(char);
} 

function isLowerCase(char) {
    return /^[a-z]$/.test(char);
}

function isUpperCase(char) {
    return /^[A-Z]$/.test(char);
}

function isLetter(char) {
    return isLowerCase(char) || isUpperCase(char);
}

function isSpace(char) {
    return char === ' ';
}


function isDigitOrLetter(char) {
    return isDigit(char) || isLetter(char);
}


function isSpecial(char) {
    // return !(isDigitOrLetter(char) || isSpace(char));
    return !isDigitOrLetter(char) && !isSpace(char);
}


function isVowel(char){
    return /^[aeiou]$/i.test(char);
}

const characterHelper = {
    isDigit,
    isUpperCase,
    isLowerCase,
    isLetter,
    isSpace,
    isDigitOrLetter,
    isSpecial,
    isVowel
};

module.exports.characterHelper = characterHelper;
