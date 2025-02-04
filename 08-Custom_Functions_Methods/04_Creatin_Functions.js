// 1. Function Declaration - traditional way

function sum1(num1, num2) {
    return num1 + num2;
}

console.log(sum1(1, 5)); //6

// 2. Function Expression

const sum2 = function (num1, num2) {
    return num1 + num2;
}

console.log(sum2(1, 5)); //6


// 3. Arrow Functions - ES6

const sum3 = (num1, num2) => {
    return num1 + num2;

    // if you have only one line code like here you can do like below
    // const sum3 = (num1, num2) => num1 + num2;
}

console.log(sum3(1, 5)); //6




const isEven = (number) => number % 2 === 0;

console.log(isEven (4)); // true
console.log(isEven (5)); // false


/*
Create a function called isWin()
This takes 2 number args and return true if both numbers are positive (1 or above)
Else it will return false

isWin(1, 5)   -> true
isWin(1, 0)   -> false
isWin(2, -3)  -> false
isWin(-4, -3) -> false
*/


const isWin = (num1, num2) => num1 && num2 > 0 ;
// or function isWin(num1, num2) {
//  return num1 > 0 && num2 > 0 ;
//}

// or Const isWin = function (num1, num2) {
//  return num1 > 0 && num2 > 0 ;
//}

console.log(isWin(1, 5));  
console.log(isWin(1, 0));
console.log(isWin(2, -3));
console.log(isWin(-4, -3));



/*
Write a function called theEnd
it takes 2 parameters called str, bool
if bool is true, return the first letter from the given string
if bool is false, return the last letter from the string

theEnd("Hello", true)   → "H"
theEnd("Hello", false)  → "o"
theEnd("oh", true)      → "o"
*/

function theEnd(str, bool){
    if (bool === true) {
        return str[0];
    }
    else {
        return str.at(-1);
    }
}

console.log(theEnd('Hello', true));
console.log(theEnd('Hello', false));