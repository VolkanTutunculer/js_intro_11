// Task 1
console.log("----Task 1----");

function calculateTotalPrice1(objects) {
  const priceList = {
    apple: 2,
    orange: 3.29,
    mango: 4.99,
    pineapple: 5.25,
  };

  let total = 0;

  for (let object in objects) {
    if (priceList[object]) {
      total += objects[object] * priceList[object];
    }
  }
  return total;
}

console.log(calculateTotalPrice1({ apple: 3, mango: 1 }));
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }));
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 }));
console.log(
  calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 })
);

// Task 2
console.log("----Task 2----");

function calculateTotalPrice2(objects) {
  const priceList = {
    apple: 2,
    orange: 3.29,
    mango: 4.99,
    pineapple: 5.25,
  };

  let total = 0;

  for (let object in objects) {
    if (object === "apple") {
      for (let i = 1; i <= objects[object]; i++) {
        if (i % 2 === 0) {
          total += priceList.apple / 2;
        } else {
          total += priceList.apple;
        }
      }
    } else if (object === "mango") {
      const freeMango = Math.floor(objects[object] / 4);
      const totalMango = objects[object] - freeMango;
      total += totalMango * priceList.mango;
    } else if (priceList[object]) {
      total += objects[object] * priceList[object];
    }
  }

  return total.toFixed(2);
}


console.log(calculateTotalPrice2({ apple: 3, mango: 5 }));
console.log(calculateTotalPrice2({ apple: 4, mango: 8, orange: 3 }));
console.log(calculateTotalPrice2({ apple: 0, pineapple: 0, orange: 0 }));
console.log(calculateTotalPrice2({ apple: 4, pineapple: 1, orange: 1, mango:3 }));


// Task 3
console.log("----Task 3----");

function nthWord(string, number){

   const stringArr = string.trim().split(/\s+/);
    if (stringArr.length === 0 || number < 1 || number > stringArr.length){
        return "";
    }

    else {
        return stringArr[number - 1];
    }
}

console.log(nthWord("I like programming languages", 2));
console.log(nthWord("QA stands for Quality Asurance", 4));
console.log(nthWord("Hello World", 3));
console.log(nthWord("Javascript", 1));
console.log(nthWord("", 1));
console.log(nthWord("        QA     stands for Quality Asurance", 4));


// Task 4
console.log("----Task 4----");

function isArmstrong(number){
let numArr = number.toString().split('');

let newNum = 0;

    for(let num of numArr){
        newNum += Number(num) ** numArr.length;
    }

    if (newNum === Number(number)) return true
    else return false
};


console.log(isArmstrong(153));
console.log(isArmstrong(123));
console.log(isArmstrong(1634));
console.log(isArmstrong(153));
console.log(isArmstrong(1111));
console.log(isArmstrong('153'));

// Task 5
console.log("----Task 5---");

function reverseNumber(number) {
  let reverseNumber = 0;
  let newNum = number;
  while (newNum > 0){

    reverseNumber = reverseNumber * 10 + newNum % 10;
    newNum = Math.floor(newNum / 10);
  }
  return reverseNumber;
}

console.log(reverseNumber(173));