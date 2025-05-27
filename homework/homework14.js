// Task 1
console.log("\n----Task 1----");

function repeatingX(string) {
  let strArr = string.toLowerCase().split("");

  for (let i = 0; i < strArr.length - 1; i++) {
    if (strArr[i] === "x" && strArr[i + 1] === "x") return true;
  }
  return false;
}

console.log(repeatingX("xTechxGlobalx"));
console.log(repeatingX("Hello Xx World"));
console.log(repeatingX("x x"));
console.log(repeatingX(""));
console.log(repeatingX("xxxxx"));

// Task 2
console.log("\n----Task 2----");

function isPerfectSquare(number) {
  if (number < 0) return false;

  for (let i = 0; i * i <= number; i++) {
    if (i * i === number) return true;
  }

  return false;
}

console.log(isPerfectSquare(25));
console.log(isPerfectSquare(24));
console.log(isPerfectSquare(0));
console.log(isPerfectSquare(1));
console.log(isPerfectSquare(-1));
console.log(isPerfectSquare(144));

// Task 3
console.log("\n----Task 3----");

function convertTemperature(number, string) {
    let lowerCaseString = string.toLowerCase()
  if (lowerCaseString === "celsius") {
    return (number * 9) / 5 + 32;
  } else if (lowerCaseString === "fahrenheit") {
    return ((number - 32) * 5) / 9;
  } else return " Please enter temperature value first, then enter unit";
}

console.log(convertTemperature(100, "Celsius"));
console.log(convertTemperature(32, "Fahrenheit"));
console.log(convertTemperature(0, "Celsius"));
console.log(convertTemperature(212, "Fahrenheit"));
console.log(convertTemperature(-40, "Celsius"));
console.log(convertTemperature(-40, "Fahrenheit"));

// Task 4
console.log("\n----Task 4----");

function sumOfEvenNumbers(array) {
  let sum = 0;

  for (let arr of array) {
    if (arr % 2 === 0) {
      sum += arr;
    }
  }
  return sum;
}

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumOfEvenNumbers([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]));
console.log(sumOfEvenNumbers([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]));
console.log(sumOfEvenNumbers([]));
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5]));
console.log(sumOfEvenNumbers([10, 20, 30, 40, 50]));

// Task 5
console.log("\n----Task 5----");

function capsOdds(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      newArray.push(array[i].toUpperCase());
    } else newArray.push(array[i]);
  }

  return newArray;
}

console.log(capsOdds(["Hello", "World"]));
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]));
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"]));
console.log(capsOdds([]));
console.log(capsOdds(["John !@#$%", "^&*() Doe"]));
