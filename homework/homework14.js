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
  if (string === "Celsius") {
    return (number * 9) / 5 + 32;
  } else if (string === "Fahrenheit") {
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
