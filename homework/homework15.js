// Task 1
console.log("\n----Task 1----");

function toCamelCase(string) {
  let strArr = string.trim().split(/\s+/);
  let resultStr = [];

  for (let i = 0; i < strArr.length; i++) {
    if (i === 0) resultStr.push(strArr[i].toLowerCase());
    else
      resultStr.push(
        strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1).toLowerCase()
      );
  }
  return resultStr.join("");
}

console.log(toCamelCase("first name"));
console.log(toCamelCase("last     name"));
console.log(toCamelCase("   ZIP CODE"));
console.log(toCamelCase("I Learn Java Script"));
console.log(toCamelCase("helloWorld"));

// Task 2
console.log("\n----Task 2----");

function toSnakeCase(string) {
  let strArr = string.toLowerCase().trim().split(/\s+/);

  return strArr.join("_");
}

console.log(toSnakeCase("first name"));
console.log(toSnakeCase("last    name"));
console.log(toSnakeCase("    I love Java Script"));
console.log(toSnakeCase("already_snake_case"));
console.log(toSnakeCase("hello"));

// Task 3
console.log("\n----Task 3----");

function alternatingCases(string) {
  let strArr = string.toLowerCase().trim().split("");
  let resultStr = [];
  let upper = true;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " ") {
      resultStr.push(strArr[i]);
      upper = true;
    } else if (/[a-zA-z]/.test(strArr[i])) {
      if (upper) resultStr.push(strArr[i].toUpperCase());
      else resultStr.push(strArr[i].toLowerCase());
      upper = !upper;
    } else {
      resultStr.push(strArr[i]);
    }
  }
  return resultStr.join("");
}

console.log(alternatingCases("Hello"));
console.log(alternatingCases("basketball"));
console.log(alternatingCases("Tech Global"));
console.log(alternatingCases("Tech Global School"));
console.log(alternatingCases(""));
console.log(alternatingCases("123!@#aB"));

// Task 4
console.log("\n----Task 4----");

function isNeutral(str1, str2) {
  let newStr = "";
  let errorMessage =
    "Only '+' or '-' should be entered as character and both string should have same length";

  for (let i = 0; i < str1.length; i++) {
    if (
      "+-".includes(str1[i]) &&
      "+-".includes(str2[i]) &&
      str1.length === str2.length
    ) {
      if (str1[i] === str2[i]) {
        newStr += str1[i];
      } else newStr += 0;
    } else return errorMessage;
  }
  return newStr;
}

console.log(isNeutral("-", "+"));
console.log(isNeutral("-+", "-+"));
console.log(isNeutral("-++-", "-+-+"));
console.log(isNeutral("--++--", "++--++"));
console.log(isNeutral("+++", "+++"));
console.log(isNeutral("++?+", "++?+"));
console.log(isNeutral("++?+", "++?+!as"));

// Task 5
console.log("\n----Task 5----");

function isTrueOrFalse(string) {
  let strArr = string.split(" ");
  let countFHalf = 0;
  let countSHalf = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (/^[a-m]/i.test(strArr[i][0])) countFHalf++;
    else if (/^[n-z]/i.test(strArr[i][0])) countSHalf++;
  }

  return countFHalf >= countSHalf;
}

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit"));
console.log(isTrueOrFalse("Xylophones can obtain Xenon."));
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK"));
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe"));
console.log(isTrueOrFalse("Got stuck in the Traffic"));
