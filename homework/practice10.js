// Task 1
console.log("\n----Task 1----");

function countWords(string) {
  return string.trim().split(" ").length;
}

console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));
