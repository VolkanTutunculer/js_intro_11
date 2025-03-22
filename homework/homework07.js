// Task 1
console.log("----Task 1----");

function hasUpperCase(string) {
  return /[A-Z]/.test(string);
}

console.log(hasUpperCase("javascript"));
console.log(hasUpperCase("John"));
console.log(hasUpperCase("$125.0"));
console.log(hasUpperCase(""));

// Task 2
console.log("----Task 2----");

function noDigit(string) {
  let splitString = string.trim().split("");
  let noDigitStrings = [];

  for (let char of splitString) {
    if (!char.match(/\d/)) {
      noDigitStrings.push(char);
    }
  }
  return noDigitStrings.join("");
}

console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));

// Task 3
console.log("----Task 3----");

function noVowel(string) {
  let noVolwelString = [];
  let noVowelArr = string.split("");
  for (let character of noVowelArr) {
    if (!character.match(/[aeiouAEIOU]/)) {
      noVolwelString.push(character);
    }
  }
  return noVolwelString.join("");
}

console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel(""));
console.log(noVowel("125$"));

// Task 4
console.log("----Task 4----");

function no13(array) {
  let no13Arr = [];

  for (let arr of array) {
    let replacedArr = String(arr).replace(13, 0);
    no13Arr.push(Number(replacedArr));
  }
  return no13Arr;
}

console.log(no13([1, 2, 3, 4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13, 13, 13]));
console.log(no13([]));

// Task 5
console.log("----Task 5----");

function middleInt(num1, num2, num3) {
  let arrNum = [num1, num2, num3];
  return arrNum.sort((a, b) => a - b)[1];
}

console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10));

// Task 6
console.log("----Task 6----");

function sumOfDigits(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/\d/)) {
      sum += Number(string[i]);
    }
  }
  return sum;
}

console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits("John’s age is 29"));
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits(""));

// Task 7
console.log("----Task 7----");

function arrFactorial(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let multiple = 1;
    if (array[i] !== 0) {
      for (let j = 1; j <= array[i]; j++) {
        multiple *= j;
      }
      newArr.push(multiple);
    } else newArr.push(multiple);
  }
  return newArr;
}

console.log(arrFactorial([1, 2, 3, 4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5, 0, 6]));
console.log(arrFactorial([]));

// Task 8
console.log("----Task 8----");

function categorizeCharacters(string){
  let newArr = [[], [], []];
  for ( let str of string){
    if (str.match(/[a-zA-Z]/)){
      newArr[0].push(str);
    }
    else if (str.match(/\d/)){
      newArr[1].push(str);
    }
    else newArr[2].push(str);
  }
  return [newArr[0].join(''), newArr[1].join(''), newArr[2].join('')];
}

console.log(categorizeCharacters("1234"))
console.log(categorizeCharacters("abc123$#%"))
console.log(categorizeCharacters("12ab$%3c%"))

