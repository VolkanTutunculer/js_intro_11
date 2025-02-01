let age = 25;

//2026
age++;

console.log(age);

//2027
age++;

console.log(age);


let quantity = 10;

quantity--;
quantity--;

console.log(quantity);

// Differance between post and pre increment / decrement

let i = 10;

let j = i++; // increase i by one but not now. at next make it plus by one

console.log(`I value is ${i} and J value is ${j}`); // I value is 11 and J value is 10

let m = 10;

let n = ++m; // increase i by one now.

console.log(`I value is ${n} and J value is ${m}`); // I value is 11 and J value is 11



let amount = 10;

console.log(amount--); // we get 10 because minus will applied at next execution