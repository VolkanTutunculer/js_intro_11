// Task 1
console.log("\n----Task 1----");

function countPalindrome(string){
    let stringArrays = string.split(" ");
    let counter = 0;

    for (let arr of stringArrays){
        if (string.length > 1 && arr.toLowerCase() === arr.split('').reverse().join('').toLowerCase()){
        counter++;
        }
    }
    return counter;
}

console.log(countPalindrome("Mom and Dad"));
console.log(countPalindrome("See you at noon"));
console.log(countPalindrome("Kayak races attracts racecar drivers"));
console.log(countPalindrome(""));
console.log(countPalindrome("No palindrome here"));
console.log(countPalindrome("a"));
console.log(countPalindrome("ab"));


// Task 2
console.log("\n----Task 2----");

function sum(array, boolean) {
  let sum = 0;
  if (boolean === true) {
    for (let i = 0; i < array.length; i += 2) {
      sum += array[i];
    }
  } else {
    for (let i = 1; i < array.length; i += 2) {
      sum += array[i];
    }
  }
  return sum;
}

console.log(sum([1, 5, 10], true));
console.log(sum([3, 7, 2, 5, 10], false));
console.log(sum([-1, 1, -2, 2], true));
console.log(sum([0, -1, 15, 1], false));
console.log(sum([1, 2, 3, 4, -4], true));

// Task 3
console.log("\n----Task 3----");

function nthChars(string, number) {
  let newStr = [];

  if (string.length < number) return "";
  else {
    for (let i = number - 1; i < string.length; i += number) {
      newStr.push(string[i])
    }
    return newStr.join("")
  }
}

console.log(nthChars("Java", 2));
console.log(nthChars("JavaScript", 5));
console.log(nthChars("Java", 3));
console.log(nthChars("Hi", 4));
console.log(nthChars("0123456789", 2));

// Task 4
console.log("\n----Task 4----");

function canFormString(str1, str2) {
  let noCaseStr1 = str1.toLowerCase().replace(/\s/g, "");
  let noCaseStr2 = str2.toLowerCase().replace(/\s/g, "");

  for (let i = 0; i < noCaseStr2.length; i++) {
    if (noCaseStr1.includes(noCaseStr2[i])) {
      noCaseStr1 = noCaseStr1.replace(noCaseStr2[i], "");
    } else return false;
  }

  return true;
}

console.log(canFormString("Hello", "Hi"));
console.log(canFormString("programming", "gaming"));
console.log(canFormString("halogen", "hello"));
console.log(canFormString("CONVERSATION", "voices rant on"));
console.log(canFormString("12", "123"));

// Task 5
console.log("\n----Task 5----");

function isAnagram(str1, str2) {
  let noCaseStr1 = str1.toLowerCase().replace(/\s/g, "");
  let noCaseStr2 = str2.toLowerCase().replace(/\s/g, "");

  if (noCaseStr1.length !== noCaseStr2.length) return false;
  
  else {
    for (let i = 0; i < noCaseStr2.length; i++) {
      if (noCaseStr1.includes(noCaseStr2[i])) {
        noCaseStr1 = noCaseStr1.replace(noCaseStr2[i], "");
      } else return false;
    }
  }
  return true;
}

console.log(isAnagram("Apple", "Peach"));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("astronomer", "moon starer"));
console.log(isAnagram("CINEMA", "iceman"));
console.log(isAnagram("123", "1234"));


// Task 6
console.log("\n----Task 6----");

function count(array, boolean) {
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    if (boolean === true && array[i] % 2 === 0) counter++

    else if (boolean === false && array[i] % 2 !== 0) counter++

  }
  return counter;
}

console.log(count([1, 5, 10], true));
console.log(count([3, 7, 2, 5, 10], false));
console.log(count([-1, 1, -2, 2], true));
console.log(count([0, -1, 15, 1], false));
console.log(count([1, 2, 3, 4, -4], true));

// Task 7
console.log("\n----Task 7----");

function sumDigitsDouble(string) {
  let onlyNums = string.match(/\d/g);
  let sum = 0;

  if (onlyNums === null) return -1;
  else {
    for (let num of onlyNums) {
      sum += parseInt(num) * 2;
    }
  }
  return sum;
}

console.log(sumDigitsDouble("Javascript"));
console.log(sumDigitsDouble("23abc45"));
console.log(sumDigitsDouble("Hi-23"));
console.log(sumDigitsDouble("ab12"));
console.log(sumDigitsDouble("n0numh3r3"));


// Task 8
const countOccurrence = (str1, str2) => {
    let arrOfOccurrences = []
  
    for(char of str2){
      arrOfOccurrences.push(str1.split('').filter(c => c.toLowerCase() === char.toLowerCase()).length)
    }
    return arrOfOccurrences.sort()[0]
  }
  
  console.log(countOccurrence("Javascript", "Java")); 
  console.log(countOccurrence("Hello", "World")); 
  console.log(countOccurrence("Can I can a can", "anc")); 
  console.log(countOccurrence("Hello", "l")); 
  console.log(countOccurrence("IT conversaitons", "IT")); 

