const numbers = [3, 4, 7, 3, 2, 2, 7];
console.log('\n--------TASK-1--------\n');
// Find the sum of all numbers         -> 28
// Find the average of the numbers     -> 4

let sum = 0;

for (const num of numbers) {
    sum += num;
}

console.log(sum);
console.log(sum/numbers.length);

// find the product of all the numbers index from 3 --> 84

console.log('\n--------TASK-2--------\n');

let prodOf = 1;

for (i = 3; i < numbers.length; i++) {
    prodOf *= numbers[i]
}

console.log(prodOf);
// teaxhers way
let prodOfNum = 1;

for (const num of numbers.slice(3)) {
        prodOfNum *= num
    }

console.log(prodOfNum);