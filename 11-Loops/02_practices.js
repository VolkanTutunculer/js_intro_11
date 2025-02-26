// output numbers from 100 to 0

for (let i=100; i >=0; i--){
    console.log(i);
}

for (let i=0; i <=50; i++){
    if ( i % 2 === 0 ){
    console.log(i);
    }
}
// OR

for (let i = 0; i <= 50; i +=2){
    console.log(i);
}

// Output all the numvers between 0 to 50 divisible by 5

for (let i=0; i <=50; i++){
    if ( i % 5 === 0 ){
    console.log(i);
    }
}

// find sum of numbers from 1 to 5

sum = 0;
for (let i=1; i <=5; i++) {
    sum += i; // sum = sum + i
}
console.log(sum);

// find sum of numbers from 10 to 15   --> 75

let total = 0
for (let i = 10; i <=15; i++ ){
    total += i;
}

console.log(total);

// Find the product of all numbers from 1 to 6 -> 1*2*3... -> 720

let prod = 1;
for (let i=1 ; i <=6; i++){
    prod *= i;
}
console.log(prod);

// outouth each character from ThechGlobal School ->

let str = 'TechGLobal School';

for (let i = 0; i < str.length; i++){
    console.log(str[i]);
}


// Count how many a's we have in the below string

let fruit = 'banana';
let numbers = 0;

for ( let i=0; i< fruit.length; i++) {
    if (fruit[i].toLowerCase() === 'a') {
        numbers++;
    }
}

console.log(numbers);