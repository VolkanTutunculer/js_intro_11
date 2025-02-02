// Function Declaration

function printHi() {
    console.log('Hi');
}

printHi();

/* my daily routine
console.log('Perpare coffe');
console.log('Take a shower');
console.log('Drink coffe');
console.log('Head to school');
*/

function runMyDaily() {
console.log('Perpare coffe');
console.log('Take a shower');
console.log('Drink coffe');
console.log('Head to school');
}

runMyDaily();


// Funtion delcaration with an argument

function hiName(name){
    console.log(`Hi ${name}!`);
}

hiName('John');
hiName('Adam');

let result = hiName('Max');

console.log(result);

// Funtion declaration with 2 arguments
// take 2 args called as greet, name
// function name greetName
//greename('Hello', 'John') -> print 'Hello, John"
// greetName('Good morning', 'Jane') -> print ' Good morning, Jane!'


function greetName(greet, name){
    console.log(`${greet}, ${name}`);
}

greetName('Hello', 'John');
greetName('Good mornig', 'Jane!')




function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

console.log(multiply(2, 5));

let fullName= 'John Doe';
console.log(fullName.startsWith('John'));


/*
Create a function called as average
This function takes 2 parameters called as num1, num2 
And it returns the average of these arguments
*/

function average(num1, num2) {
  
    return ((num1 + num2)/2);
}
console.log(average(5, 7));
console.log(average(5, -3));