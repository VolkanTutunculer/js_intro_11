// Task 1
console.log("----Task 1----");

function hasLowerCase(string) {
  if (string.trim().match(/[a-z]/)) return true;
  else return false;
}

console.log(hasLowerCase(""));
console.log(hasLowerCase("JAVASCRIPT"));
console.log(hasLowerCase("hello"));
console.log(hasLowerCase("125$"));
console.log(hasLowerCase("   a   "));

// Task 2
console.log("----Task 2----");

function noZero(array) {
  let zeroNone = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      zeroNone.push(array[i]);
    }
  }
  return zeroNone;
}

console.log(noZero([1]));
console.log(noZero([1, 1, 10]));
console.log(noZero([0, 1, 10]));
console.log(noZero([0, 0, 0]));
console.log(noZero([10, 100, 0]));

// Task 3
console.log("----Task 3----");

function numberAndSquare(array) {
  return array.map((num) => [num, num * num]);
}

console.log(numberAndSquare([1, 2, 3]));
console.log(numberAndSquare([0, 3, -6]));
console.log(numberAndSquare([1, 4]));
console.log(numberAndSquare([0, 0, 0]));
console.log(numberAndSquare([0, 1, -10]));

// Task 4
console.log("----Task 4----");

function containsValue(array, string) {
  return array.includes(string);
}

console.log(containsValue(["abc", "foo", "javascript"], "hello"));
console.log(containsValue(["abc", "def", "123"], "Abc"));
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"));

// Task 5
console.log("----Task 5----");

function reverseSentence(string) {
  let wordsOfString = string.toLowerCase().split(" ");
  let reverseStr = wordsOfString.reverse().join(" ");

  if (wordsOfString.length <= 1) {
    return "There is not enough words!";
  }
  return reverseStr[0].toUpperCase() + reverseStr.slice(1, reverseStr.length);
}

console.log(reverseSentence("Hello"));
console.log(reverseSentence("Javascript is fun"));
console.log(reverseSentence("This is a sentence"));

// Task 6
console.log("----Task 6----");

function removeStringSpecialsDigits(string) {
  let str = string.split("");
  let onlyStr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.)
    if (str[i].match(/[a-zA-Z]/) || str[i].match(/[ ]/)) {
      onlyStr.push(str[i]);
    }
  }
  return onlyStr.join("");
}

console.log(removeStringSpecialsDigits("123Javascript #$%is fun"));
console.log(removeStringSpecialsDigits("Cypress"));
console.log(removeStringSpecialsDigits("Automation123#$%"));


// Task 7
console.log("----Task 7----");

function removeArraySpecialsDigits(strArr){
  
} 

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]))
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]))
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]))
