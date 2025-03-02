const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
// Count how many positive numbers you have in the array -> 4
console.log(`\n----Task1----\n`)

let countPos = 0;
for (const number of numbers) {
    if (number > 0) countPos++;
}

console.log(countPos);

// Count how many negative numbers you have in the array -> 3
console.log(`\n----Task2----\n`)

let countNeg = 0;
for (const number of numbers) {
    if (number < 0) countNeg++;
}

console.log(countNeg);

// Count how many even numbers you have in the array -> 7
console.log(`\n----Task3----\n`)

let countEven = 0;
for (const number of numbers) {
    if (number % 2 === 0) countEven++;
}

console.log(countEven);


// Count how many odd-positive numbers you have in the array -> 2
console.log(`\n----Task4----\n`)

let countPosOdd = 0;
for (const number of numbers) {
    if (number % 2 !== 0 && number > 0) countPosOdd++;
}

console.log(countPosOdd);