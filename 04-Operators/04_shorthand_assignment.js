// = assignment operator

// Shorthand assignment operators

let num = 5;

// increase the num variable by 5
// num = num + 5;

num += 5;

console.log(num); // 10


let n1 = 10;

n1 *= 2; // n1 = 20

n1 /= 4; // n1 = 5

n1 **= 3; // n1 = 125

console.log(n1);

let n2= 7;

n2 += ++n2; // 15

n2 /= 3; // 5

console.log(n2++ % 3); //2 


let n3 = 20;

let n4 = 3;

n3 += (n4 -= 1);

--n3;

console.log(--n3 * ++n4); // 60

/*
find their

product (*)
Addition (+)
Division (/)
Substraction (-)
Remainder (%)
Exponentiation (^)
*/

let num1 = 6;
let num2 = 4;

console.log(num1*num2);
console.log(num1+num2); 
console.log(num1/num2);
console.log(num1-num2);
console.log(num1%num2);
console.log(num1**num2);

// or we can do below

let sum = num1 + num2;

let product = num1 * num2;

let sub = num1 - num2;

let div = num1 / num2;

let remainder = num1 % num2;

let exponentation = num1 ** num2;;


console.log(`The sum of the numbers is = ${sum}`);

console.log(`The product of the numbers is = ${product}`);

console.log(`The subtraction of the numbers is = ${sub}`);

console.log(`The division of the numbers is = ${div}`);

console.log(`The remainder of the numbers is = ${remainder}`);

console.log(`The Exponentation of the numbers is = ${exponentation}`);


// Create variable if you will refer it more than once

let price = 10;
let quantity = 5;

let total = price * quantity;

// First calculate total
// then provide 20 percent discount

console.log(`the total is = ${total}`);
console.log(`the discounted total is = $${total * 0.8}`);


// Rectangle area and perimeter calculation
let side1 = 5;
let side2 = 8;

let area = side1 * side2;
let perimeter = (side1 + side2)*2 ;

console.log(`Area of rectangle is ${area}`);
console.log(`Perimeter of rectangle is ${perimeter}`);

 /* An annual average salary for an SDET in the 
 Unites States is 120k. Write a program that calculates 
 and prints the monthly and bi-weekly 
 and weekly average amount that an SDET makes in 
 the United States.

 */

 let salary = 120000;

 console.log(`Monthly salary for SDET is $${(salary/12).toFixed(2)}`);
 console.log(`Bi-weekly salary for SDET is $${(salary/26).toFixed(2)}`);
 console.log(`Weekly salary for SDET is $${(salary/52).toFixed(2)}`);