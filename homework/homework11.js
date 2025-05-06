// Task 1
console.log("----Task 1----");

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
console.log("----Task 2----");

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
console.log("----Task 3----");
