function getMultipleOf5(num1, num2) {
  let MultipOf5 = [];

  for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
    if (i % 5 === 0) {
      MultipOf5.push(i);
    }
  }
  return MultipOf5;
}

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));

function firstDuplicate(arr) {
  let firstDub = -1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return (firstDub = arr[i]);
      }
    }
  }
  return firstDub;
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, "5", 3, 7, 4]));
console.log(firstDuplicate([123, "abc", "123", 3, "abc"]));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(["foo", "abc", "123", "bar"]));

//how many items are negative

function countNeg(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log(countNeg([-45, 0, 0, 34, 5, 67]));
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]));
console.log(countNeg([0, -1, -2, -3]));

/*
Write a function named as firstlastWord() which takes a string word as an argument and returns the first and last words from the given string when invoked. NOTE: Return empty string if the given string does not have any word.

Examples:
firstLastWord("Hello World")   	        -> "HelloWorld"
firstLastWord("I like JavaScript")  	-> "IJavaScript"
firstLastWord("Hello")   		        -> "HelloHello"
firstLastWord("")   			        -> ""
firstLastWord("	")   		            -> ""
*/

function firstLastWord(string) {
  let firstLastArr = string.trim().split(" ");
  if (firstLastArr.length < 2) {
    return firstLastArr[0] + firstLastArr[0];
  } else return firstLastArr[0] + firstLastArr[firstLastArr.length - 1];
}

console.log(firstLastWord("Hello World"));
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello"));
console.log(firstLastWord(""));
console.log(firstLastWord("	"));

/*
Write a function named noA() which takes an array of strings as argument and will return a new array with all elements starting with "A" or "a" replaced with "###".

Examples:
noA(["javascript", "hello", "123", "xyz"])   ->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"])   ->  ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"])    ->  ["###", "###", "###", "###", "###"]
*/

function noA(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith("a") || arr[i].startsWith("A")) newArr.push("###");
    else newArr.push(arr[i]);
  }
  return newArr;
}

console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));

/*
Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked. NOTE: Mathematically, the factorial of a non-negative integer n is defined as:

n! = n * (n-1) * (n-2) * ... * 2 * 1
Assume you will not be given a negative number.

Examples:
factorial(5)   	-> 120
factorial(4)  	-> 24
factorial(0)  	-> 1
factorial(1)  	-> 1
*/

function factorial(num) {
  let factorialOfNum = 1;

  for (let i = 1; i <= num; i++) {
    factorialOfNum *= i;
  }
  return factorialOfNum;
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

/*
Write a function named isPalindrome() which takes a string word as an argument and returns true if the word is palindrome or returns false otherwise when invoked. NOTE: Palindrome: It is a word that is read the same backward as forward Examples: kayak, civic, madam NOTE: your function should ignore case sensitivity

Examples:
isPalindrome("Hello")       -> false
isPalindrome("Kayak")       -> true
isPalindrome("civic")       -> true
isPalindrome("abba")        -> true
isPalindrome("ab  a")       -> false
isPalindrome("123454321")   -> true
isPalindrome("A")           -> true
isPalindrome("")            -> true
*/

function isPalindrome(string) {
  let revStr = [...string].reverse().join("");
  if (string === revStr) return true;
}

console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab  a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));
