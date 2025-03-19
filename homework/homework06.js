// Task 1
console.log("----Task 1----");

function noSpace(string) {
  return string.trim().split(/\s+/).join("");
}

console.log(noSpace(""));
console.log(noSpace("Javascript"));
console.log(noSpace("    Hello   "));
console.log(noSpace(" Hello World   "));
console.log(noSpace("Tech Global"));

// Task 2
console.log("----Task 2----");

function replaceFirstLast(string) {
  if (string.trim().length < 2) return "";
  else
    return (
      string[string.length - 1] + string.slice(1, string.length - 1) + string[0]
    );
}

console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("    A      "));

// Task 3
console.log("----Task 3----");

function hasVowel(string) {
  if (string.toLowerCase().includes("a", "e", "o", "u", "i")) return true;
  else return false;
}

console.log(hasVowel(""));
console.log(hasVowel("Javascript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));

// Task 4
console.log("----Task 4----");

function checkAge(number) {
  const date = new Date().getFullYear();

  if (date < number) return "AGE IS NOT VALID";
  else if (date - number > 120) return "AGE IS NOT VALID";
  else if (date - number < 16) return "AGE IS NOT ALLOWED";
  else return "AGE IS ALLOWED";
}

console.log(checkAge(2015));
console.log(checkAge(2007));
console.log(checkAge(2050));
console.log(checkAge(1920));
console.log(checkAge(1800));

// Task 5
console.log("----Task 5----");

function averageOfEdges(num1, num2, num3) {
  return (Math.max(num1, num2, num3) + Math.min(num1, num2, num3)) / 2;
}

console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20));

// Task 6
console.log("----Task 6----");

function noA(arrString) {
  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i].toLowerCase().startsWith("a")) {
      arrString[i] = "###";
    }
  }
  return arrString;
}

console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));

// Task 7
console.log("----Task 7----");

function no3and5(arrNumber) {
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 15 === 0) {
      arrNumber[i] = 101;
    } else if (arrNumber[i] % 3 === 0) {
      arrNumber[i] = 100;
    } else if (arrNumber[i] % 5 === 0) {
      arrNumber[i] = 99;
    } else arrNumber[i];
  }
  return arrNumber;
}

console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));

// Task 9
console.log("----Task 9----");

function removeDuplicates(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) array[j] = "";
    }
  }
  return array.filter((arr) => arr !== "");
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));

// Task 10
console.log("----Task 10----");

function isDateFormatValid(string) {
  if (!string.includes("/")) return false;
  else {
    let splitString = string.trim().split("/");
    if (
      splitString.length === 3 &&
      splitString[0].length === 2 &&
      splitString[1].length === 2 &&
      splitString[2].length === 4
    )
      return true;
    else {
      return false;
    }
  }
}

console.log(isDateFormatValid("15/30/2020"));
console.log(isDateFormatValid(""));
console.log(isDateFormatValid("10-30-2020 "));
console.log(isDateFormatValid("10.30.2020"));
console.log(isDateFormatValid("5/30/2020"));
console.log(isDateFormatValid("05/30/2020 "));
console.log(isDateFormatValid("10/2/2020"));
console.log(isDateFormatValid("10/02/2020 "));

// Task 11
console.log("----Task 11----");

function secondMax(array) {
  let noDubArr = [];
  if (array.length > 1) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] !== array[j]) noDubArr.push(array[i]);
      }
    }
    return noDubArr.sort()[1];
  } else return array[0];
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMax([3, 4, 5, 6]));
console.log(secondMax([10]));

// Task 12
console.log("----Task 12----");

function secondMin(array) {
  let noDubArr = [];
  if (array.length > 1) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] !== array[j]) noDubArr.push(array[i]);
      }
    }
    return noDubArr.sort((a, b) => b - a)[1];
  } else return array[0];
}

console.log(secondMin([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMin([3, 4, 5, 6]));
console.log(secondMin([10]));

// Task 13
console.log("----Task 13----");

function mostRepeated(array) {
  let maxCount = 0;
  let mostRepeatedElement;

  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) count++;
    }
    if (count > maxCount) {
      maxCount = count;
      mostRepeatedElement = array[i];
    }
  }
  return mostRepeatedElement;
}

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]));
console.log(mostRepeated([10]));
console.log(mostRepeated(["TechGlobal"]));
