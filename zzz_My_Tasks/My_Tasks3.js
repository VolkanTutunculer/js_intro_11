let min = 1;
let max = 100;

let randomNum = Math.floor(Math.random()*(max-min+1))+min;

console.log(randomNum);

function evenOrrOdd(number){
    if (number % 2 === 0){
        return "EVEN";
    }
    else {
        return "ODD"
    }
}

console.log(evenOrrOdd(randomNum));




function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n- 1);
    }
}

console.log(factorial(3));


function factor(n){
    if (n === 0 || n=== 1){
        return 1;

    }
    else {
        return n * factor(n - 1);
    }
}
console.log(factor(7));

function reverseString(string) {
    string = string.trim();

    if (string.length < 2) {
        return "";
    }
    let reversed = [];

    for (let i = string.length - 1; i >= 0; i--) {
        reversed.push(string[i]);
    }
    return reversed.join("")
}

console.log(reverseString("Tech Global"));


function replaceFirstLastWord(str) {
    str = str.trim();
    if (str.length < 2) {
        return "";
    }
    return str[str.length - 1] + str.slice(1, str.length - 1) + str[0]
}

console.log(replaceFirstLastWord('volkan'))