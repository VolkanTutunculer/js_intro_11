// Task 1
console.log("----Task 1----");

function makeNegative(number) {
  if (number > 0) return -1 * number;
  else return number;
}

console.log(makeNegative(10));
console.log(makeNegative(-7));
console.log(makeNegative(0));
console.log(makeNegative(0.45));

// Task 2
console.log("----Task 2----");

function isSumEvenOrOdd(num1, num2, num3) {
  let sum = num1 + num2 + num3;

  if (sum % 2 === 0) return "even";
  else return "odd";
}

console.log(isSumEvenOrOdd(0, 1, 4));
console.log(isSumEvenOrOdd(0, -1, -5));
console.log(isSumEvenOrOdd(0, 0, 0));
console.log(isSumEvenOrOdd(7, 1, 9));
console.log(isSumEvenOrOdd(1, 1, 1));

// Task 3
console.log("----Task 3----");

function decimal2(array) {
  let decimalArr = [];

  for (let arr of array) {
    decimalArr.push(Math.floor(arr * 100) / 100);
  }
  return decimalArr;
}

console.log(decimal2([94.356, 8.9752]));
console.log(decimal2([76.62, 128.4, 84]));
console.log(decimal2([20987, 3.53245, 12.345, 32.9]));
console.log(decimal2([]));
console.log(decimal2([4.35623, 8.9742]));

// Task 4
console.log("----Task 4----");

function myPow(num1, num2) {
  let power = 1;

  if (num2 === 0) return power;
  else if (num2 < 0) {
    let newPower = 1;

    for (let i = 0; i < num2 * -1; i++) {
      newPower *= num1;
    }

    power = 1 / newPower;
    return power;
  } else {
    for (let i = 0; i < num2; i++) {
      power *= num1;
    }
  }
  return power;
}

console.log(myPow(3, 3));
console.log(myPow(10, 1));
console.log(myPow(100, 0));
console.log(myPow(1, 1));
console.log(myPow(4, 2));
console.log(myPow(0, 0));
console.log(myPow(5, 3));
console.log(myPow(-5, -3));

// Task 5
console.log("----Task 5----");

function findLongestWord(string) {

  let strArr = string.trim().split(/\s+/);
  let longest = "";

  for (let str of strArr) {
    if (longest.length < str.length) {
      longest = str;
    }
  }

  return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("This is a sample string for testing"));
console.log(findLongestWord("One two ten"));
console.log(findLongestWord(""));
console.log(findLongestWord("      "));
