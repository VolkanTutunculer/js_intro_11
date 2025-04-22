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
  if (string.toLowerCase() === [...string].reverse().join("").toLowerCase())
    return true;
  else return false;
}

console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab  a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));

// Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
//Calculate the sum of the numbers and print it.

function randomNum(num1, num2) {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  let random1 = Math.floor(Math.random() * (max - min + 1)) + min;
  let random2 = Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(random1);
  console.log(random2);

  return random1 * random2;
}

console.log(randomNum(1, 10));

// Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
// Find the smallest of the numbers and print it.

function randMin(num1, num2) {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  let random1 = Math.floor(Math.random() * (max - min + 1)) + min;
  let random2 = Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(random1);
  console.log(random2);

  return Math.min(random1, random2);
}
console.log(randMin(1, 10));

// Write a function named as concat() which takes two string words as arguments and returns the words concatenated when invoked.
// NOTE: Concatenation should always be as first string + second string.

function concat(str1, str2) {
  return str1 + str2;
}

console.log(concat("Tech", "Global"));
console.log(concat("Hello", "World"));
console.log(concat("", "abc"));
console.log(concat("123", "1234"));

// Write a program that generates a random number between 1 and 10 (both inclusive).
// If the random number is odd, print true.
// Otherwise, print false.

function randIsOdd(num1, num2) {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randNum);
  if (randNum % 2 !== 0) return true;
  else return false;
}

console.log(randIsOdd(1, 10));

// Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
// Calculate the average of the numbers and print it.

function AvrRandm(num1, num2) {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);

  let rndm1 = Math.floor(Math.random() * (max - min + 1)) + min;
  let rndm2 = Math.floor(Math.random() * (max - min + 1)) + min;
  let rndm3 = Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(rndm1);
  console.log(rndm2);
  console.log(rndm3);

  return Math.floor((rndm1 + rndm2 + rndm3) / 3);
}

console.log(`Avreage is ${AvrRandm(1, 10)}`);

// Write a function named as firstLast() which takes a string word as an argument and returns the first and the last characters of the given word when invoked.
// NOTE: If the given word does not have 2 or more characters, then return the string back.

// Examples:
// firstLast("Tech")		-> "Th"
// firstLast("TechGlobal")	-> "Tl"
// firstLast("")			-> ""
// firstLast(" ")			-> " "
// firstLast("1")			-> "1"
// firstLast("abcde")		-> "ae"

function firstLast(string) {
  if (string.length >= 2) {
    return string[0] + [...string].reverse()[0];
  } else return string;
}

console.log(firstLast("Tech"));
console.log(firstLast("TechGlobal"));
console.log(firstLast(""));
console.log(firstLast(" "));
console.log(firstLast("1"));
console.log(firstLast("abcde"));

/*
Write a function named as doubleOrTripleWord() which takes a string word as an argument and returns the given word back tripled if the string length is even or doubled if the string length is odd when invoked.
*/

function doubleOrTripleWord(string) {
  if (string.length % 2 === 0) return string + string + string;
  else if (string.length % 2 !== 0) return string + string;
  else return string;
}

console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));

/*
Write a function named reverseStringWords() which takes a string as an argument and returns the string back with each word separately reversed when invoked. NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and after words in the given string.
*/

function reverseStringWords(string) {
  let reverseStr = string.trim().split(" ");
  let reverseWord = [];

  for (let i = 0; i < reverseStr.length; i++) {
    let word = "";
    for (let j = reverseStr[i].length - 1; j >= 0; j--) {
      word += reverseStr[i][j];
    }
    reverseWord.push(word);
  }

  return reverseWord.join(" ");
}

console.log(reverseStringWords("    Hello World"));
console.log(reverseStringWords("I like JavaScript     "));
console.log(reverseStringWords("Hello"));
console.log(reverseStringWords(""));
console.log(reverseStringWords("	"));

/*
Write a function named as swapFirstLastWord() which takes a string word as an argument and returns the string back with its first and last words swapped when invoked. NOTE: Return empty string if the given string does not have 2 or more words.
*/

function swapFirstLastWord2(string) {
  let words = string.trim().split(" ");
  if (words.length < 2) return "";
  else if (words.length === 2) return words[1] + " " + words[0];
  else
    return (
      words[words.length - 1] +
      " " +
      words.slice(1, words.length - 1).join(" ") +
      " " +
      words[0]
    );
}

console.log(swapFirstLastWord2("Hello World"));
console.log(swapFirstLastWord2("I like JavaScript"));
console.log(swapFirstLastWord2("foo bar foo bar"));
console.log(swapFirstLastWord2(""));
console.log(swapFirstLastWord2("	"));
console.log(swapFirstLastWord2("Hello"));
console.log(swapFirstLastWord2("Hello   "));

/*
Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from the original string​.
*/

function noDigit(string) {
  let result = "";
  let wordsArr = string.trim().split(" ");

  for (let i = 0; i < wordsArr.length; i++) {
    let cleanedWord = wordsArr[i].replace(/\d+/g, "");
    if (cleanedWord) {
      result += cleanedWord + " ";
    }
  }

  return result.trim();
}

console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));

let months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

console.log(months.slice(1, 2));

function countMultipleWords(array) {
  let count = 0;

  for (let string of array) {
    if (typeof string === "string" && string.trim().includes(" ")) {
      count++;
    }
  }

  return count;
}

console.log(countMultipleWords(["foo", " ", "foo", "foo bar", "foobar"]));

/*
Write a function named as doubleOrTripleWord() which takes a string word as an argument and
returns the given word back tripled if the string length is even or doubled if the string length is odd when
invoked.
Examples:
*/

function doubleOrTripleWord(string) {
  if (
    (typeof string === "string" || typeof string === "number") &&
    string.length % 2 === 0
  )
    return string + string + string;
  else if (
    (typeof string === "string" || typeof string === "number") &&
    string.length % 2 === 1
  )
    return string + string;
  else return string;
}

console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));

/*
Write a function named as firstlastWord() which takes a string word as an argument and returns the
first and last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.
*/

function firstLastWord(string) {
  let strArr = string.split(" ");
  return strArr[0] + strArr[strArr.length - 1];
}

console.log(firstLastWord("Hello World"));
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello"));
console.log(firstLastWord(""));
console.log(firstLastWord(" "));

/*
Write a function named hasVowel() which takes a string argument and returns true if the string has a
vowel, returns false if the string doesn’t contain any vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
*/

function hasVowel(string) {
  let vowels = ["a", "e", "o", "u", "i"];

  for (let vowel of vowels) {
    if (string.toLowerCase().includes(vowel)) {
      return true;
    }
  }
  return false;
}

console.log(hasVowel(""));
console.log(hasVowel("Javascript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));

/*
Write a function named as startVowel() which takes a string word as an argument and returns true if
given string starts with a vowel, and false otherwise when invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
*/

function startVowel(string) {
  let vowels = ["a", "e", "o", "u", "i"];
  if (typeof string === "string" || typeof string === "number") {
    if (string.length > 0) {
      let startStr = string[0].toLowerCase();
      if (vowels.includes(startStr)) return true;
      else return false;
    }
    return false;
  }
  return false;
}
console.log(startVowel("Hello"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel(" "));
console.log(startVowel("123"));


/*
Write a function named replaceFirstLast() which takes a string argument and returns a new string with
the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
*/

function replaceFirstLast(string){
  if ( string.trim().length < 2 ) return '';
  else return string[string.length-1]+string.slice(1,string.length-1)+string[0]
}
console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast(" A "));