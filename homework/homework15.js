// Task 1
console.log("\n----Task 1----");

function toCamelCase(string) {
  let strArr = string.trim().split(/\s+/);
  let resultStr = [];

  for (let i = 0; i < strArr.length; i++) {
    if (i === 0 && strArr.length === 1) resultStr.push(strArr[i]);
    else if (i === 0) resultStr.push(strArr[i].toLowerCase());
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
