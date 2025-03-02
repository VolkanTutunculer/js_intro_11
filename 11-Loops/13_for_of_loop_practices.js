const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
// Count how many positive numbers you have in the array -> 4

let countPos = 0; 
for(let number of numbers){
    if (number > 0) countPos++;
}

console.log(countPos);

// Count how many negative numbers you have in the array -> 3

let countNeg = 0; 
for(let number of numbers){
    if (number < 0) countNeg++;
}

console.log(countNeg);

// Count how many even numbers you have in the array -> 7

let countEven = 0;
for (let number of numbers) {
    if (number % 2 === 0) countEven++;
}

console.log(countEven);