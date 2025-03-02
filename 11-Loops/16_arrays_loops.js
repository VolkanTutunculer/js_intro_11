const numbers = [3, 4, 7, 3, 2, 2, 7];
// find the sum of numbers that has even index -> 19


console.log('\n--------TASK-1--------\n');
let sumEvnIndx = 0
for (let i = 0; i < numbers.length; i++)
    if (i % 2 === 0) {
        sumEvnIndx += numbers[i];
    }
console.log(sumEvnIndx);

// OR

let sumForEvenIndex = 0;

for (let i = 0; i <numbers.length; i += 2){
    sumForEvenIndex += numbers[i]
}
console.log(sumForEvenIndex);

console.log('\n--------TASK-2--------\n');
// find the product of odd index

let prodOfOdd = 1;

for (let i = 1; i <numbers.length; i += 2) prodOfOdd *= numbers[i] ;

console.log(prodOfOdd);