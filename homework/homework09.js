// Task 1
console.log("\n----Task 1----");

function fizzBuzz1(number) {
  if (number % 15 === 0) return "FizzBuzz";
  else if (number % 3 === 0) return "Fizz";
  else if (number % 5 === 0) return "Buzz";
  else return number;
}

console.log(fizzBuzz1(0));
console.log(fizzBuzz1(1));
console.log(fizzBuzz1(3));
console.log(fizzBuzz1(5));
console.log(fizzBuzz1(30));
console.log(fizzBuzz1(10));
console.log(fizzBuzz1(15));
console.log(fizzBuzz1(-15));

// Task 2
console.log("\n----Task 2----");

function fizzBuzz2(number) {
  let numArr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) numArr.push("FizzBuzz");
    else if (i % 3 === 0) numArr.push("Fizz");
    else if (i % 5 === 0) numArr.push("Buzz");
    else numArr.push(i);
  }
  return numArr;
}

console.log(fizzBuzz2(3));
console.log(fizzBuzz2(5));
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(2));

// Task 3
console.log("\n----Task 3----");

function findSumNumbers(string) {
  let onlyNum = string.match(/\d+/g);
  let sum = 0;
  if (!onlyNum || onlyNum.length === 0) return sum;
  else {
    for (let i = 0; i < onlyNum.length; i++) {
      sum += Number(onlyNum[i]);
    }
  }
  return sum;
}

console.log(findSumNumbers("abc$"));
console.log(findSumNumbers("a1b4c  6#"));
console.log(findSumNumbers("ab110c045d"));
console.log(findSumNumbers("525"));
console.log(findSumNumbers("3 for 10 dollars"));

// Task 4
console.log("\n----Task 4----");

function findBiggestNumber(string) {
  let onlyNumbers = string.match(/\d+/g);
  let biggest = 0;
  if (!onlyNumbers || onlyNumbers.length === 0) return biggest;
  else {
    for (let i = 0; i < onlyNumbers.length; i++) {
      if (biggest < Number(onlyNumbers[i])) {
        biggest = Number(onlyNumbers[i]);
      }
    }
  }
  return biggest;
}

console.log(findBiggestNumber("abc$"));
console.log(findBiggestNumber("a1b4c  6#"));
console.log(findBiggestNumber("ab110c045d"));
console.log(findBiggestNumber("525"));
console.log(findBiggestNumber("3 for 10 dollars"));

// Task 5
console.log("\n----Task 5----");

function countOccurrencesOfCharacters(string) {
  if (string.length === 0) return "";

  let returnStr = "";
  let count = 1;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      count++;
    } else {
      returnStr += count + string[i];
      count = 1;
    }
  }

  return returnStr;
}

console.log(countOccurrencesOfCharacters(""));
console.log(countOccurrencesOfCharacters("abc"));
console.log(countOccurrencesOfCharacters("abbcca"));
console.log(countOccurrencesOfCharacters("aaAAa"));
console.log(countOccurrencesOfCharacters("www"));

// Task 6
console.log("\n----Task 6----");
function fibonacciSeries1(number) {
  let series = [0, 1];
  if (number <= 1) return series[0];
  else {
    for (let i = 2; i < number; i++) {
      if (series.length <= number) {
        series.push(series[i - 2] + series[i - 1]);
      } else return;
    }
  }

  return series;
}

console.log(fibonacciSeries1(3));
console.log(fibonacciSeries1(5));
console.log(fibonacciSeries1(7));
console.log(fibonacciSeries1(8));
console.log(fibonacciSeries1(1));
console.log(fibonacciSeries1(2));

// Task 7
console.log("\n----Task 7----");
function fibonacciSeries2(number) {
  let series = [0, 1];
  if (number <= 1) return series[0];
  else {
    for (let i = 2; i < number; i++) {
      if (series.length <= number) {
        series.push(series[i - 2] + series[i - 1]);
      } else return;
    }
  }

  return series[number - 1];
}

console.log(fibonacciSeries2(2));
console.log(fibonacciSeries2(4));
console.log(fibonacciSeries2(8));
console.log(fibonacciSeries2(9));
console.log(fibonacciSeries2(1));

// Task 8
console.log("\n----Task 8----");

function findUniques(arr1, arr2) {
  let uniqNumbs = [];
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i]) && !uniqNumbs.includes(arr2[i])) {
      uniqNumbs.push(arr2[i]);
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i]) && !uniqNumbs.includes(arr1[i])) {
      uniqNumbs.push(arr1[i]);
    }
  }
  return uniqNumbs.sort();
}

console.log(findUniques([], []));
console.log(findUniques([], [1, 2, 3, 2]));
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));
console.log(findUniques([8, 9], [9, 8, 9]));
console.log(findUniques([-1, -2], [1, 2]));

// Task 9
console.log("\n----Task 9----");

function isPowerOf3(number) {
  for (let i = 1; i <= number; i *= 3) {
    if (i === number) return true;
  }

  if (number === 1) return true;
  else return false;
}

console.log(isPowerOf3(1));
console.log(isPowerOf3(2));
console.log(isPowerOf3(3));
console.log(isPowerOf3(27));
console.log(isPowerOf3(100));
console.log(isPowerOf3(81));
console.log(isPowerOf3(9));
console.log(isPowerOf3(6));
