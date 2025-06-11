// Task 1
console.log("\n----Task 1----");

function toInitials(string) {
  let str = string.toUpperCase().split(" ");
  return `${str[0][0]}. ${str[1][0]}.`;
}

console.log(toInitials("Joe Doe"));
console.log(toInitials("Alex Reyes"));
console.log(toInitials("Tom Cruise"));
console.log(toInitials("Bruce Willis"));
console.log(toInitials("Ja Le"));

// Task
console.log("\n----Task 2----");

function hasNumbers(string) {
  return /\d/.test(string);
}

console.log(hasNumbers(""));
console.log(hasNumbers("John is 34 years old"));
console.log(hasNumbers("Hello 3"));
console.log(hasNumbers("125$"));
console.log(hasNumbers("   a   "));
console.log(hasNumbers("      "));
console.log(hasNumbers("!@#$%^&*()_+"));

// Task 3
console.log("\n----Task 3----");

function elementLength(array) {
  let lengthArr = [];

  for (let arr of array) {
    lengthArr.push(arr.length);
  }
  return lengthArr;
}
console.log(elementLength(["Hello", "World"]));
console.log(elementLength(["Apple", "Banana", "Orange", "Pear"]));
console.log(elementLength(["BMW", "Mercedes", "Audi"]));
console.log(elementLength([]));
console.log(elementLength(["Trampoline", "", "Tennis", "Basketball"]));

// Task 4
console.log("\n----Task 4----");

function isArraySumEvenOrOdd(array) {
  let sum = 0;

  for (let arr of array) {
    sum += arr;
  }
 return sum % 2 === 0 ? "even" : "odd";
}

console.log(isArraySumEvenOrOdd([]));
console.log(isArraySumEvenOrOdd([0, -1, -5]));
console.log(isArraySumEvenOrOdd([7, 1, 8, 1]));
console.log(isArraySumEvenOrOdd([0, 0]));
console.log(isArraySumEvenOrOdd([1, 1, 1, 1, 1]));

// Task 5
console.log("\n----Task 5----");

function reverse(string) {
  return string.split("").reverse().join("");
}

console.log(reverse("Hello World"));
console.log(reverse("TechGlobal"));
console.log(reverse("Basketball is fun"));
console.log(reverse(""));
console.log(reverse("Apples 456"));

// Task 6
console.log("\n----Task 6---");

function reverseWords(string) {
  let words = string.trim().split(/\s+/);
  let reversedWords = words.map((word) => word.split("").reverse().join(""));
  return reversedWords.join(" ");
}

console.log(reverseWords("Hello World"));
console.log(reverseWords("TechGlobal"));
console.log(reverseWords("Basketball is fun"));
console.log(reverseWords(""));
console.log(reverseWords("Apples 456"));
