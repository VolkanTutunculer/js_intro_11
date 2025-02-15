console.log('Hello');
console.log('Today is JS learning day');

// Below line just prints Hello
console.log('Hello');
console.log('Hi');

/*
multi line
comments
*/


/**
 * JS Doc
 * JS Documentation
 */


// Escape Squences
// I like 'Aplle' and "Banana"

console.log('I like \'Apple\' and "Banana"');

console.log("I like 'Aplle' and \"Banana\"");

console.log(`I like 'Apple' and "Banana"`); // ES6 feature

console.log('\tHello, today is good day.\nI enjoy it so far!'); // \t - tab space, \n - new line.

console.log(`   Hello, today is good day.
I enjoy it so far!`); // With backticks you dont need to use \n for new line or \t for tab space.

// My file can be found at C:\My Documents\MyFile.txt
console.log('My file can be found at C:\\My Documents\\MyFile.txt'); // you need to use backword slash twice.

console.log('Hello\\\\\\Word'); // print Hello\\\\World


const person = { 
    fname: 'John',
    lname: 'Doe',
    age: 25,
};

// John doe will be 30 after 5 years

let years = 5;

console.log(person.fname + ' ' + person.lname + ' will be ' + (person.age+years) + ' after ' + years + ' years.');
console.log(`${person.fname} ${person.lname} will be ${person.age + years} after ${years} years.`);

let price = 2.5;
let quantity = 10;

// The total price is = $25

console.log(`The total price is = $${price * quantity}`); // prefere this way
console.log('The total price is = $' + price * quantity);   

// let - const - var // we can use 3 of them

// reservedkey variableName = value;
let name = 'John';

console.log(name);

// Number data

let age = 45;

console.log(age);

console.log(age + 5);

// Declare a variable without initial value

let city; // undefined  

console.log(city);

// assingning a value to a variable

city = 'New York';

city = 'Los Angeles';

console.log(city);

// initialization of a variable = declaration + assignment
let country = 'USA';


// 1. Initialization
// let name = 'John';
// let age = 45;

// 2. Declaration
// let name;
// let age;

// 3. Assignment or re-assignment
// name = 'John';
// age = 45;

let num1 = 1;   

// Reassigning the value of num1

num1 = 11;

console.log(num1);

// const variable cannot be re-assigned
const num2 = 2;
num2 = 22;

console.log(num2);

const firstMonth = 'January';
const pi  = 3.14;

// Declare let but not const. 
let num10;
const num11 = 11;   // const must always be initialized

// let name1;
// let name2;
// let name3;

let name1, name2, name3;

let num1 = 5, num2 = 10, num3;

const pi = 3.14; num0 = 0, num10 = 10;

let city1 = "Chicago";
let city2 = "New York";

console.log(city2);
console.log(city2);

// RULES: syntax rules you MUST follow (Error)
// Convention: Good to follow = unwritten rules
// digits can not be used as the first character of a variable name

let city1;
let student5; // digits can be used anywhere exceot the first character
let $price;
let _bala_nce_;

// Spaces are not allowed in variable names.
let my_city;
let totalnumberofstudentsinbatch11 = 20; // Do not use like this the underline
let TotalNumberOfStudentsInBatch11;      // use like that
let favouriteMovie = "Interstellar";

let sun;
let SUM;
let SUm; // upper and lower case is change variable, they are not same.

// String

let fullname = 'John Doe';

console.log(fullname);

console.log(typeof fullname);

console.log(typeof ''); // because it has '', still this is string  (empty string)


// Number

let wholeNumber = 10;
let decimalNumber = 15.99;

let numberOfStudents = 20;
let subscriptionFee = 19.99;

console.log(numberOfStudents);
console.log(subscriptionFee);

console.log(typeof numberOfStudents);
console.log(typeof subscriptionFee);


// BigInt

let biggrstNumber = Number.MAX_SAFE_INTEGER;
let smallestNumber = Number.MIN_SAFE_INTEGER;

console.log(biggrstNumber);
console.log(smallestNumber);

let number1 = 9007199254740991;
let number2 = 90071992547409917n;
let number3 = BigInt('90071992547409917');

console.log(number1);
console.log(number2);
console.log(number3);

console.log(typeof number1); // number
console.log(typeof number2); // bigint
console.log(typeof number3); // bigint

console.log(90071992547409917n + 5); // bigint req bigint to be used on calcutation
console.log(90071992547409917n + 5n); // its the right wayy to do it

// boolean

let b1 = true;
let b2 = false;

console.log(b1);
console.log(b2);

console.log(typeof b1);
console.log(typeof b2);

let age = 15;

let allowed = age >= 16;

console.log(allowed);

/*if (age >= 16) {
    console.log('you are allowed')
}
else {
    console.log('you are not allowed')
}
*/

let excamScore = 75

let pass = excamScore >= 65;

console.log(pass);

console.log(typeof (5 == 5)); // boolean


// What is difference between undefined and null ??????
// undefined is for variables that are declared but not assigned a value
// null is used intencially yto point absence of data

// undefined
let today;
console.log.log(today)
console.log(typleof today);

// null

let SSN = null;
console.log(SSN);
console.log(typeof SSN);


// Symbol
let s1 = Symbol('Foo');
let s2 = Symbol('SOS');
let s3 = Symbol('XOX');

console.log(s1);
console.log(s2);
console.log(s3);

console.log(typeof s1); // symbol
console.log(typeof s2); // symbol
console.log(typeof s3); // symbol


// Arrays

let studentName = 'Ayah';

// Multiple names. numbers, objects. strings, prices
const names = ['John', 'Alex', 'James', 'Max']; // String array
const numbers = [5, 7, 10, 15]; // Number array

console.log(names);
console.log(numbers); 

const favoriteMovies = ['Matrix', 'Avengers', 'Fast and Furious'];

console.log(favoriteMovies);
console.log(typeof favoriteMovies); // object

// Getting the size of the array - How many elements you have in the array
let sizeOfArray = favoriteMovies.length;
console.log(sizeOfArray);)

// Acces an specific element in the array

console.log(favoriteMovies[1]);

let secondMovie = favoriteMovies[1];

console.log(secondMovie);
console.log(favoriteMovies [2]); // Fast and Furious
console.log(typeof favoriteMovies[2]); // string

console.log(favoriteMovies[3]); // undefined
console.log(favoriteMovies[-1]); // undefined

const cities = ['Rome', 'Berlin'];

console.log(cities.length);

cities[1] = 'Chicago';

console.log(cities); // ['Rome', 'Chicago']

// Add new element
// cities[2] = 'Miami'; risky

cities.push('Miami');

cities.push('Milan', 'Gent');

console.log(cities);

const ids = [99, 100, 101, 102, 103, 104];

let firstElement = ids[0];
let lastElement = ids[ids.length - 1];

console.log(firstElement);
console.log(lastElement);

const mixArray = [5, 'John', true, 3===0, Symbol('Foo'), 10.99, undefined, null, NaN, {}, []];

/*
let fname = 'John';
let lname = 'Doe';
let age = 45;
let vip = false;
*/

// Objects
const person = {

    fname: 'John',
    lname: 'Doe',
    age: 45,
    vi: false,

};

console.log(person);    // { fnasme: 'John', lname: 'Doe', age: 45, vi: false }
console.log(typeof person); // object

let firstName = person.fname;
console.log(firstName); // John
console.log(typeof firstName); // string

console.log(typeof person.age); // number

// how to acces the properties of an object

console.log(person.fname);
console.log(person.age);
//or 
console.log(person['fname']);
console.log(person['age']);

const program = {

    name: 'SDET',
    start: 'Jan 20, 2025',
    duraction: '6 months'

}

program.start = 'Jan 27, 2025';
program['duraction'] = '7 Months';

console.log(program);


const student = {

    fullname: 'John Doe',
    courses: ['Maath', 'Science'],
    address: {
        street: '123 Abc St',
        number: null,
        city: 'Chicago',
        state: 'IL',
        ZIPCode: '12345 1234'
    }
}

// Adding a property to an existing object

student.address.ZIPCode = 'M4P 1A5';
student.age = 25;
student['favDish'] = 'Pizza';

console.log(student);

console.log(student.courses[1]);

// remove some properties from an existing object

delete student.favDish;

console.log(student); // { fullname: 'John Doe', courses: [ 'Maath', 'Science' ], address: { street: '123 Abc St', number: null, city: 'Chicago', state: 'IL', ZIPCode: 'M4P 1A5' }, age: 25 }

// Simple ones + - * /


let num1 = 2;
let num2 = 5;
let num3 = 3;
let num4 = 6;

console.log(num4 / num1);
console.log(num1 * num3 * num4);
console.log(num3 - num4 - num1 + num4 * 2);

console.log(num4 - (num3 - num1) * num2);

// Exponentiation

console.log(3 ** 2); // 9
console.log(4 ** 3); // 64
console.log(5 ** 4); // 625 


console.log(2**5 / 4 + 3 * 2);

// Modulus - Remainder

console.log(15 % 4); // 3

console.log(2 * 5 % 3 - 7); // -6
console.log(5 + 16 % 7 + 2); // 9


let n1 = 3 ;
let n2 = '5';
let n3 = 4;
let n4 = '10';

console.log(n1 + n2); // 35
console.log(n1 + n3 + n4 + n2); // 7105
console.log(n1 + (n3 + n4) + n2); // 34105

console.log(n2 * n1); // 15 // JS converts the string to a number

console.log(n4 / n2); // 2

console.log('Hello' / 2); // NaN
console.log('Hello' - 'Hi'); // NaN

console.log(5 * true); // 5 // true is converted to 1
console.log(5 * false); // 0 // false is converted to 0

console.log(5 * ''); // 0 // empty string is converted to 0
console.log(5 * '   '); // 0 // empty space is converted to 0

console.log('the sum of 3 and 5 = ' + 3 + 5); // the sum of 3 and 5 = 35

console.log('the sum of 3 and 5 = ' + (3 + 5)); // the sum of 3 and 5 = 8 

console.log('The difference of 5 and 3 = ' + (5 - 3)); // The difference of 5 and 3 = 2
      
console.log('The division of 6 and 2 is ' + 6 / 2); // The division of 6 and 2 is 3
    
console.log('The remainder of 6 and 2 is = ' + 6 % 2); // The remainder of 6 and 2 is = 0


let today = 'Sunday';

console.log('Today is ' + today); // Today is Sunday // preffered as second option
console.log('today is', today); // today is Sunday
console.log(`today is ${today}`); // today is Sunday // preferred 

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

 let v1 = 3;
let v2 = '3';
let v3 = 5;
let v4 = '5';
 
console.log(v1 < v3); // true
console.log(v1 <= v3); // true

console.log(v1 == v3); // false  // compare this if their value is equal or not
console.log(v1 === v3); // false // compare this if their data type is equal or not

// == compare only value
// === compare both value and data types (strick comparision)

console.log(v1 == v2); // true
console.log(v1 === v2); // false

console.log(true == 1); // true
console.log(true === 1); // false

console.log('hello' != 'HELLO'); // true

console.log(3 != '3'); // false
console.log(3 !== '3'); // true 

// NOT (!) , OR (||) , AND (&&)

console.log(3 ** 2 < 10 && !false && (5 % 2) == !false); // true

let b1 = !(!(('Hello' === 'Hello') || 5 > 5) && (3 * 5 >= 3 **4));

console.log(b1);

/*
FALSY VALUES: 0, '', undefined, null, Nan, false
let result = value1 || value2;
if value1 is falsy, then result is always value2
if value2 is falsy, then result is always value1 
// Falsy value den hic birinin sorguda gelmeyecegini garantiler

let result = value1 ?? value2;
if value1 is undefinedor null, then result is always value2
if value2 is not undefined or null, then result is always value1
// sadece undefined yada null un sorguda gelmeyecegini garantiler

*/
let nameInServer = null;

nameInServer = nameInServer ?? 'customer';
console.log(`Dear ${nameInServer}`);

let num = 20;

console.log(typeof num); // number
console.log(isNaN(num));  

console.log(20 * 'Hi'); // NaN
console.log(typeof NaN); // number
console.log(isNaN(NaN)); // True


let num1 = Infinity;
let num2 = -Infinity;

console.log(num1);
console.log(num2);

console.log(typeof num1); // number
console.log(typeof num2); // number

console.log(Infinity * Infinity); // Infinity
console.log(-Infinity * Infinity); // -Infinity
console.log(Infinity - Infinity); // NaN
console.log(Infinity / Infinity); // NaN
console.log(Infinity % Infinity); // NaN
console.log(Infinity ** Infinity); // Infinity 

/*
OBJECT: all built-in objects in programming languages have their own properties and functions.

properties: information about the object what it has

functions: abilities of the object what it does

Number.MAX_SAFE_INTEGER; // prop

Number.MIN_SAFE_INTEGER; // prop

Math.PI; // 3.14

Math.max(1, 2); // 2

parantez varsa fonksiyon

*/

console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity

let num1 = 10.4551;
let num2 = 5;
let num3 = 10;

console.log (num1.toFixed(2)); // 10.46
console.log (num1.toPrecision(5)); // 10.455 

console.log((22.25).toFixed(2)); // 22.25
console.log((2.225).toPrecision(2)); // 2.2

console.log(num2 + num3); // 15
console.log(num2.toString() + num3.toString()); // '510'

let fname = 'James';

fname.length; // 5

let fullname = 'John Dole';
fullname.length; //8

let company = 'TechGlobal';

let companyLower = company.toLowerCase();
let companyUpper = company.toUpperCase();

console.log(companyLower);

/*
TASK: it converst the string to Lowercase version
ARGUMENTS: no args
RETURN: it returns a new string
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: instance
*/

let course = 'Software Engineer in Test';

let courseUpper = course.toUpperCase();

console.log(course);
console.log(courseUpper);

/*
TASK: it converst the string to Uppercase version
ARGUMENTS: no args
RETURN: it returns a new string
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: instance
*/

console.log('BoFA'.toLowerCase().toUpperCase()); //BOFA

console.log('Saturday'.toLowerCase().length); // 8


let company = 'TechGlobal';

// Get char using property access

company[0]; // T
console.log(company[0]); // 'T'
console.log(company[8]); // 'a'

// Get first and last chars

let greeting = 'Tech';

let firstChar = greeting[0];
let lastChar = greeting[greeting.length - 1];

console.log(firstChar); // 'T'
console.log(lastChar); // 'h'

// charAt()

let city = 'Chicago';

console.log(city.charAt(2)); // i
console.log(city.charAt(city.length - 1)); // o

// at()

let color = 'Purple';

console.log(color.at(0)); // P
console.log(color.at(color.length - 1)); // e

// the differences are EDGE CASES

// EDGE CASES

let name = 'Max';

console.log(name[-1]); // undefined
console.log(name[3]); // undefined

console.log(name.charAt[-1]); // undefined
console.log(name.charAt[3]); // undefined

console.log(name.at(-1)); // x
console.log(name.at(3)); // undefined

console.log(name.at(-1)); //x
console.log(name.at(-2)); //a
console.log(name.at(-3)); //M
console.log(name.at(-4)); // underfined

// Get first and last chars in a string

let brand = 'Apple';
let fChar = brand[0];
let lChar = brand.at(-1);

/*
charAt()
TASK: used to retrieve a char from string at specified index
    note; if the index is not valid for the string, it returns undefined
ARGUMENTS: yes, it takes an index
RETURN: returns a char as a string
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: instance
*/

/*

at()
TASK: sed to retrieve a char from string at specified index
    note: index could be negative as well (counting backworks)
ARGUMENTS: yes, it takes an index
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: instance
*/

// starstWith () vs endsWith()

let company = 'TechGlobal';

console.log(company.startsWith('T')); // true
console.log(company.startsWith('Tech')); // true
console.log(company.startsWith('TechGlobal')); // true

console.log(company.startsWith('t')); // false
console.log(company.toLowerCase().startsWith('t')); // true

console.log(company.endsWith('l')); // True
console.log(company.endsWith('Global')); // True
console.log(company.endsWith('TechGlobal')); // True

console.log(company.startsWith('') && company.endsWith('')); // True

console.log(company.toUpperCase().startsWith('TECH') && company.toLowerCase().endsWith('l')); // True


/*
startsWith() method
TASK: used to check if string starts with another substring
ARGUMENTS: yes, it takes a string to check
RETURN: returns a boolean (true if string starts with substring or false otherwise)
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

/*
endsWith() method
TASK: used to check if string ends with another substring
ARGUMENTS: yes, it takes a string to check
RETURN: returns a boolean (true if string ends with substring or false otherwise)
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

// includes () method

let quote = `Let's do it`;

console.log(quote.includes ('')); // true
console.log(quote.includes('')); // true
console.log(quote.includes('do')); // true
console.log(quote.includes('let')); // false

console.log(quote.includes('let')); // false
console.log(quote.includes('it')); // false

/*
includes() method
TASK: checks if the string contains another substring
ARGUMENTS: it takes another substring to check
RETURN: returns a boolean (true if string contains the substring or false otherwise)
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/


let address = '123 Street Chicago IL 12345';

console.log(address.includes ('Chicago')); // true
console.log(address.includes ('Chicago', 20)); // will search 20 caracter after // False

console.log(address.startsWith('123')); // True
console.log(address.startsWith('123', 1)); // True

// search()

let str = 'abcde';
console.log(str.search('abc')); // 0
console.log(str.search('a')); // 0
console.log(str.search('d')); // 3
console.log(str.search('x')); // -1

console.log(str.search('bc')); // 1
console.log(str.search('bcde')); // 1
console.log(str.search('abcde')); //0

console.log(str.search('bcda')); // -1
console.log(str.search('')); // 0
console.log(str.search(' ')); // -1
console.log(str.search('a')); // 0

// indexOf() and lastIndexOf() methods // indexOf ilk buldugunu verir.

let today = 'saturday';

console.log(today.indexOf('a')); //1
console.log(today.lastIndexOf('a')); //6

console.log(today.lastIndexOf('123 ')); //-1
console.log(today.indexOf('123 ')); //-1

console.log(today.lastIndexOf('r ')); //4
console.log(today.indexOf('r ')); //4

// if there is only one match of the sarched string, then indexOf() and
// lastIndexOf() will always return the same index.
// -1 means i dont have the string.


// Make sure the address has Street keyword
let myAddress = '123 Street Chicago';
console.log(myAddress.indexOf('Street') !== -1); // True
console.log(myAddress.indexOf('12345') !== -1); // False

/*
indexOf()
TASK: check if the original string has a substring
ARGUMENTS: yes, a substring
RETURN: returns thr first found index of the matching substring within original string
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

/*
lastIndexOf()
TASK: check if the original string has a substring
ARGUMENTS: yes, a substring
RETURN: returns thr last found index of the matching substring within original string
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

console.log('can i can a can'.indexOf('can')); // 0
console.log('can i can a can'.lastIndexOf('can')); // 12

let city = ' chicago ';

console.log(city.length); //9
console.log(city.trimStart().length); //8
console.log(city.trimEnd().length); //8
console.log(city.trim().length); //7

/*
trim()
TASK:remove extra whitespaces before and after your string
ARGUMENTS:No args
RETURN: returns a new string
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

let str = ' Hello ';
let strTrimmed = str.trim();

console.log(str);
console.log(str.length);
console.log(strTrimmed);
console.log(strTrimmed.length);


let greet = ' Good Morning Dear!  ';
console.log(greet. trim()); //Good Morning Dear!

let school = 'TechGlobal School';

let s1 = school.slice(0, 4); // 'Tech'
let s2 = school.slice(4, 10); // 'Global'
let s3 = school.slice(0, 10); // 'TechGlobal'
let s4 = school.slice(11, 17); // 'School'

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

console.log(school.slice(4)); // 'Global school'

let city = 'Los Angeles';

console.log(city.substring(0, 3));
console.log(city.substring(4));

console.log('Apple'.slice(2, 10)); // 'ple'
console.log('Apple'.substring(2, 10)); // 'ple'
console.log('Orange'.slice(-10, 10)); // 'Orange'
console.log('Orange'.substring(-10, 10)); // 'Orange'

console.log('Banana'.slice(1, -1)); // 'anan'
console.log('Banana'.slice(1, -2)); // 'ana'
console.log('Banana'.slice(0, -5)); // 'B'
console.log('Banana'.slice(0, -6)); // ''
console.log('Banana'.slice(0, 0)); // ''

console.log('Banana'.substring(1,-1)); // 'B'
console.log('Banana'.substring(0, 0)); // ''
console.log('Banana'.substring(3,0)); // 'Ban'

/*
slice()
TASK: used to extract substrings from a string
ARGUMENTS: takes one or two index arguments
RETURN: returns a substring including startIndex, excluding endIndex
NOTE: it also allows negative indexes, and count backward in this case
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

/*
NOTE: We'll always use slice() method to extract substrings
If you have 2 positive index:

if startIndex >= endIndex, then your result is always ''
'Hello'.slice(3, 2); // ''
'Hello'.slice(3, 3); // ''

if endIndex is not provide, means start with startIndex and go all the way to the end.
'Hello'.slice(2); // 'llo'

slice() method also works with negative indices (indexes) 
In this case, you'll go backward
'Hello'.slice(-1); // 'o'
'Hello'.slice(-2); // 'lo' // it will give last 2 character

'Chicago'.slice(-5, -2); // 'ica'
'Chicago'.slice(-1, -4); // ''

'Miami'.substring(-2, -4); // ''
if substring has - bot array always gives 0

'Miami'.substring(2, 0); // 'Mi'
*/


let str1 = 'Today is Sunday';

const words = strl.split('');

console.log(words); // [ 'Today', 'is', Sunday ]

console.log(words[0]); // 'Today'

console.log(words [2].slice(0, 3)); // 'Sun'



let str2 = '+1 (322) 000 0000';

console.log(str2.split(' ')); //[ '+1', '(322)', '000', '0000' ]
console.log(str2.split(' ').length); //4

console.log(str2.split(' ')[0] === '+1'); // true



let str3 = 'C:\\Users\\Techgloba\\Desltop\\MyFolder'
console.log(str3.split('\\'));

let str4 = 'One word or two';
console.log(str4.split('word')); // ['One ', ' or two']

let str5 = 'Apple';
console.log(str5.split('')); // [ 'A', 'p', 'p', 'l',

let countWords = "I am at school and teaching J5 String split method today!".split(' ').length
console.log(countWords); // 11



const actualDate = '2025-02-14';
const appDate = actualDate.split('-');
console.log(appDate);

let expectedDate = `${appDate[1]}/${appDate[2]}/${appDate[0]}`;

console.log(expectedDate);

console.log(expectedDate === '02/14/2025');

/*
TASK: split the string with the given separator
ARGUMENTS: Yes, a string or regex separator
RETURN: returns an Array of your splitted substrings
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

let str = '123 street 123'

let strReplaced = str.replace('123', '###'); // always replace the first one
let strReplacedAll = str.replaceAll('123', '###'); // replace all '123'

console.log(strReplaced);
console.log(strReplacedAll);

/*
replace() method
TASK: replaces the first found occurrence of searchString with another string
ARGUMENTS: 2 args, searchString, newValue
RETURN:returns a new string with replacement applied
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

/*
replace() method
TASK: replaces all the found occurrence of searchString with another string
ARGUMENTS: 2 args, searchString, newValue
RETURN:returns a new string with replacement applied
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

// EDGE
let str1 = 'Today is Saturday';
console.log(str1.replace('Saturday', 'Monday')); // if can not find noting will change

console.log(str1.replaceAll('day', 'XXX')); //ToXXX is SaturXXX


/*
Assume that you are given a string of any length

Get the last 5 characters from it

Morning     -> rning
Saturday    -> urday
Hello       -> Hello
*/

let str1 = 'Saturday';

let lastFive = str1.slice(-5); // Recommended
//or
let lastFive2 = str1.slice(str1.length - 5);

console.log(lastFive);
console.log(lastFive2);

/*
Assume that you are given a string of any length

Get the first 3 characters and the last 3 characters
Then, concatenate these in a new string

JavaScript      -> Javipt
Hello           -> Helllo
123             -> 123123
*/

let str2 = 'Hello';

let newString = `${str2.slice(0, 3)}${str2.slice(-3)}`;

console.log(newString);



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

const { getRandomNumber} = require ('./../utils/MathHelper.js');

/*
Create 4 random numbers within 1 and 50 both include and find their average
*/

let r1 = getRandomNumber(1, 50);
let r2 = getRandomNumber(1, 50);
let r3 = getRandomNumber(1, 50);
let r4 = getRandomNumber(1, 50);

console.log(r1, r2, r3, r4);
console.log((r1 + r2 + r3 + r4)/4 );

/*
Generate 3 random numbers within 50 and 100 both include and find the max, min one
*/

let r5 = getRandomNumber(50, 100);
let r6 = getRandomNumber(50, 100);
let r7 = getRandomNumber(50, 100);

console.log(r5, r6, r7);
console.log(Math.max(r5, r6, r7));
console.log(Math.min(r5, r6, r7));

/*
Write a function which takes a number and return true if the number is even 
or return false if the number is odd

isEven(4)   -> true
isEven(3)   -> false
isEven(0)   -> true
isEven(-2)  -> true
isEven(-7)  -> false
*/

function isEven(number) {
    return (number % 2) === 0;
}
console.log(isEven(4));
console.log(isEven(3));
console.log(isEven(0));
console.log(isEven(-2));
console.log(isEven(-7));



/*
Write a function named initials which takes 2 arguments as fname and lname and 
return initials

initials('John', 'Doe')      -> 'J.D.'
initials('Adam', 'Smith')    -> 'A.S.'
initials('Max', 'Smith')     -> 'M.S.'
*/


function initials(fname, lname) {
    return `${fname[0]}.${lname[0]}.`;
}


console.log(initials('John', 'Doe'));
console.log(initials('Adam', 'Smith'));
console.log(initials('Max', 'Smith'));


/*
Write a function named inits which takes a fullname and return initials

inits('John Doe')      -> 'JD'
inits('Adam smith')    -> 'AS'
inits('max Smith')     -> 'MS'
*/

function inits(fullname) {

    /*
    let fullnameArr = fullname.split(''); // ['', '']
    
    return (fullnameArr[0] [0] + '.' + fullnameArr[1] [0] + '.').toUpperCase();
    */
   
    return `${fullname[0]}.${fullname [fullname.indexOf(' ') + 1]}.`.toUpperCase();
}

console.log(inits('John Doe'));
console.log(inits('Adam smith'));
console.log(inits('max Smith'));

// 1. Function Declaration - traditional way

function sum1(num1, num2) {
    return num1 + num2;
}

console.log(sum1(1, 5)); //6

// 2. Function Expression

const sum2 = function (num1, num2) {
    return num1 + num2;
}

console.log(sum2(1, 5)); //6


// 3. Arrow Functions - ES6

const sum3 = (num1, num2) => {
    return num1 + num2;

    // if you have only one line code like here you can do like below
    // const sum3 = (num1, num2) => num1 + num2;
}

console.log(sum3(1, 5)); //6




const isEven = (number) => number % 2 === 0;

console.log(isEven (4)); // true
console.log(isEven (5)); // false


/*
Create a function called isWin()
This takes 2 number args and return true if both numbers are positive (1 or above)
Else it will return false

isWin(1, 5)   -> true
isWin(1, 0)   -> false
isWin(2, -3)  -> false
isWin(-4, -3) -> false
*/


const isWin = (num1, num2) => num1 && num2 > 0 ;
// or function isWin(num1, num2) {
//  return num1 > 0 && num2 > 0 ;
//}

// or Const isWin = function (num1, num2) {
//  return num1 > 0 && num2 > 0 ;
//}

console.log(isWin(1, 5));  
console.log(isWin(1, 0));
console.log(isWin(2, -3));
console.log(isWin(-4, -3));



/*
Write a function called theEnd
it takes 2 parameters called str, bool
if bool is true, return the first letter from the given string
if bool is false, return the last letter from the string

theEnd("Hello", true)   → "H"
theEnd("Hello", false)  → "o"
theEnd("oh", true)      → "o"
*/

function theEnd(str, bool){
    if (bool === true) {
        return str[0];
    }
    else {
        return str.at(-1);
    }
}

console.log(theEnd('Hello', true));
console.log(theEnd('Hello', false));


// Immeadiately Invoked Function Expression

(function () {

    console.log('I AM ALIVE')

} ) ();


// TASK 1

console.log('I start to practice "JavaScript" today, and I like it.');
console.log('The secret of getting ahead is getting started.');
console.log('"Don\'t limit yourself. "');
console.log('Invest in your dreams. Grind now. Shine later.');
console.log("It's not the load that breaks you down, it's the way you carry it.");
console.log('The hard days are what make you stronger.');
console.log('You can waste your lives drawing lines. Or you can live your life crossing them.');


// TASK 2

console.log('\tJavaScript is a high-level programming language primarily used to \nbuild web applications. It is not limited to the web; it can also be used \nfor the backend development with technologies like Node.js.\n\n\tIt is open source and has a huge community support, which means \nthere are plenty of resources and support available for learning. It \nuses a syntax like other programming languages and easy to learn'
)

// TASK 3

let myAge = 34;
let myFavoriteNumber = 13;
let myHeight = 1.84;
let myWeight = 104;
let myFavoriteLetter = 'F';

console.log('My Age:' + myAge);
console.log('My Favorite Number:' + myFavoriteNumber);
console.log('My Height:' + myHeight);
console.log('My Height:' + myWeight);
console.log('My Favorite Letter:' + myFavoriteLetter);

// TASK 4

let num1 = 25;
let num2 = 35;

console.log('The sum of the number = ' + (num1 + num2));

// TASK 5

let n1 = 5;
let n2 = 7;

console.log('The product of the number = ' + (n1 * n2));

// TASK 6

let number1 = 24;
let number2 = 10;

console.log('The sum of the number = ' + (number1 + number2));
console.log('The product of the number = ' + (number1 * number2));
console.log('The subtraction of the number = ' + (number1 - number2));
console.log('The division of the number = ' + (number1 / number2));
console.log('The remainder of the number = ' + (number1 % number2));

// TASK 7

let i1 = 7;
let i2 = 11;

console.log('The average of the numbers is: '+(i1 + i2)/2);

// TASK 8

let a1 = 6;
let a2 = 10;
let a3 = 12;
let a4 = 15;
let a5 = 17;

console.log('The average of the numbers is: '+((a1 + a2 + a3 + a4 + a5)/5));

// TASK 9

let b1 = 5;
let b2 = 6;
let b3 = 10;

console.log('The ' + b1 + ' multiplied with ' + b1 + ' is = ' + (b1 ** 2));
console.log('The ' + b2 + ' multiplied with ' + b2 + ' is = ' + (b2 ** 2));
console.log('The ' + b3 + ' multiplied with ' + b3 + ' is = ' + (b3 ** 2));

// TASK 10

let side = 7;

console.log('The perimeter of the square = ' + (side * 4));
console.log('The area of the square = ' + (side * side));

// TASK 11

let favBook = 'JS Algorithms & Data Structures';
let favColor = 'Blue';
let favNumber = 7;

console.log('The favorite book is ' + favBook + '\nThe favorite color is ' + favColor + '\nThe favorite number is ' + favNumber);

// TASK 12

let firstName = 'John';
let lastName = 'Doe';
let age = 45;
let emailAddress = 'johndoe@gmail.com';
let phoneNumber = '(123) 123 1234';
let address = '123 st Chicago IL 12345';

console.log('\tUser who joined this program is ' + firstName + ' ' + lastName + '. ' + firstName + '`s age is ' + age + '.' + '\n' + firstName + '`s email address is ' + emailAddress + ', phone number is  ' + '\n' + phoneNumber + ', and address is ' + address + '.');


// TASK 1 

let str1 = 5, str2 = 2;

console.log(`The sum of ${str1} and ${str2} is = ${(str1 + str2)}`);
console.log(`The product of ${str1} and ${str2} is = ${(str1 * str2)}`);
console.log(`The division of ${str1} and ${str2} is = ${(str1 / str2)}`);
console.log(`The subtraction of ${str1} and ${str2} is = ${(str1 - str2)}`);
console.log(`The remainder of ${str1} and ${str2} is = ${(str1 % str2)}`);
console.log(`The exponentiation of ${str1} and ${str2} is = ${(str1 ** str2)}`);

// TASK 2

let s1 = 200, s2 = -50;

console.log(`The greatest value is = ` + Math.max(s1, s2));
console.log(`The smallest value is = ` + Math.min(s1, s2));
console.log(`The average is = ` + (s1 + s2)/2);
console.log(`The absolute differance is = ` + Math.abs(s1 - s2));

// TASK 3

let start = 1;
let end = 50;

let num1 = Math.floor(Math.random() * (end - start + 1)) + start;
let num2 = Math.floor(Math.random() * (end - start + 1)) + start;

console.log(`The absolute difference between numbers is = ` + Math.abs(num1 - num2));

// TASK 4

let strts = 1;
let ends = 50;

let n1 = Math.floor(Math.random() * (ends - strts + 1)) + strts;
let n2 = Math.floor(Math.random() * (ends - strts + 1)) + strts;
let n3 = Math.floor(Math.random() * (ends - strts + 1)) + strts;
let n4 = Math.floor(Math.random() * (ends - strts + 1)) + strts;
let n5 = Math.floor(Math.random() * (ends - strts + 1)) + strts;

/*
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
*/

console.log(`The max value = ` + Math.max(n1, n2, n3, n4, n5));
console.log(`The min value = ` + Math.min(n1, n2, n3, n4, n5));

// TASK 5

let startNum = 50;
let endNum = 100;

let number1 = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
let number2 = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
let number3 = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;

console.log(`The number 1 = ${number1}`);
console.log(`The number 2 = ${number2}`);
console.log(`The number 3 = ${number3}`);
console.log(`The sum of numbers is = ${number1 + number2 + number3}`);

// TASK 6

let sNumber = 1;
let eNumber = 100;
let greater = 25;

let numberOne = Math.floor(Math.random() * (eNumber - sNumber + 1)) + sNumber;
let numberTwo = Math.floor(Math.random() * (eNumber - sNumber + 1)) + sNumber;
let numberThree = Math.floor(Math.random() * (eNumber - sNumber + 1)) + sNumber;

/*
console.log(numberOne);
console.log(numberTwo);
console.log(numberThree);
*/

console.log(numberOne > greater && numberTwo > greater && numberThree > greater);

// TASK 7

let name = 'David';

console.log(`The length of the name is = ${(name.length)}`);
console.log(`The last character in the name is = ${(name.at(-1))}`);
console.log(`The first 3 characters in the name are = ${(name.slice(0, 3))}`)
console.log(`The first 3 characters in the name are = ${(name.slice(name.length - 3))}`)


/*
Task01

Requirement:
Write a program that extracts expected values from a given String using JS 
String functions.

"I like apples and oranges"  -> "APPLE"
"JavaScript is not a scripting programming language"   -> "JavaScript"
"I don't like books"  -> "I like books"
*/

let str1 = "I like apples and orange";
let str2 = "JavaScript is not a scripting programming language";
let str3 = "I don't like books";

console.log(str1.slice(7, 12).toUpperCase());
console.log(str2.slice(0, 10));
console.log(str3[0] + str3.slice(7));
// Or
console.log(str3.replace("don't ",''));



/*
Task02

Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 
-if it has any vowel, then print true
-Else, print false
Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1: let s1 = "JavaScript";
Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true

Test Data 2: let s1 = "";
Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false
*/

let s1 = "JavaScript"

console.log('The length is = ' + s1.length);
console.log('The first char is = ' + s1.at(0));
console.log('The last char is = ' + s1.at(-1));
/*
s1 = s1.toLowerCase();
let hasVowel = s1.includes('a') || s1.includes('e') || s1.includes('i') || s1.includes('u') || s1.includes('o')
*/
let hasVowel = /[aeiouAEIOU]/i.test(s1);
console.log(hasVowel);


/*
Task03

Requirement:
Assume that you are given a String of any odd length. 
Find the middle character for the given String. 

Test Data 1: let s2 = "x";
Expected Result 1: "x"

Test Data 2: let s2 = "abc";
Expected Result 2: "b"

Test Data 3: let s2 = "civic";
Expected Result 3: "v"
*/

let s2 = "civici";

console.log(s2[(s2.length-  1 )/2]);


/*
Task04

Requirement:
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

Test Data 1: let s3 = "";
Expected Result 1: ""

Test Data 2: let s3 = "abcd";
Expected Result 2: "bc"

Test Data 3: let s3 = "JavaScript";
Expected Result 3: "Sc"


Toyota -> yo
*/

let s3 = 'JavaScript';
console.log(s3[(s3.length)/2-1]+s3[(s3.length)/2]);

// Teacher's solution

let str = 'JavaScript'
console.log(str.slice(str.length / 2 - 1, str.length / 2 + 1));

/*
Task05

Requirement:
Write a program that divides the given String. Assume the length of the 
String will at least be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters

Test Data 1: let s4 = "abcd";
Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = ''

Test Data 2: let s4 = "JavaScript";
Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/

let s4 = 'JavaScript';

console.log(`The first 2 characters are = ${s4.slice(0,2)}`);
console.log(`The last 2 characters are = ${s4.slice(-2)}`);
console.log(`The other characters are = ${s4.slice(2, -2)}`);

/*
Task06

Requirement:
Assume that you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print 
false.

Test Data 1: let s5 = "ab";;
Expected Result 1: true

Test Data 2: let s5 = "abcd";
Expected Result 2: false

Test Data 3: let s5 = "12ab12";;
Expected Result 1: true

Test Data 4: let s5 = "JavaScript";
Expected Result 4: false
*/

let s5 = '12ab12';

console.log(s5.slice(0,2) === s5.slice(-2));

/*
Task07

Requirement:
Write a program that gets rid of first and last characters of given two String values. 
Then, add these two String values to each other and print the result. 

Test Data 1:
let s61 = "orange";
let s62 = "6";
Expected Result 1: rang

Test Data 2:
let s61 = "1234";
let s62 = "Green";
Expected Result 2: 23ree

Test Data 3:
let s61 = "123456";
let s62 = "Blue";
Expected Result 3: 2345lu

Test Data 4:
let s61 = "Yellow";
let s62 = "Red";
Expected Result 4: elloe
*/

let s61 = 'Yellow';
let s62 = 'Red';

console.log(s61.slice(1, (s61.length-1)) + s62.slice(1, (s62.length-1)) );
console.log(`${s61.slice(1, (s61.length-1))}${s62.slice(1, (s62.length-1))}`);
// Teacher's Solution

console.log(s61.slice(1, -1) + s62.slice(1, -1));




/*
Task08

Requirement:
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false

Test Data 1: let s7 = "";
Expected Result 1: false

Test Data 2: let s7 = "red";
Expected Result 2: false

Test Data 3: let s7 = "green";
Expected Result 3: false

Test Data 4: let s7 = "xxbluexx";
Expected Result 4: true
*/

let s7 = 'xxbluexx';

console.log( s7.slice(0,2) === 'xx' && s7.slice(-2) === 'xx');
//or
console.log(s7.startsWith('xx') && s7.endsWith('xx'));

/*
Task09

Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 1: let s8 = "";
Expected Result 1: ""

Test Data 2: let s8 = " ";
Expected Result 2: " "

Test Data 3: let s8 = "I like Apple";
Expected Result 3: "Apple like I"

Test Data 4: let s8 = "JavaScript is nice to learn";
Expected Result 4: "learn is nice to JavaScript"
*/

let s8 = 'JavaScript is nice to learn';

let first = s8.slice(0, s8.indexOf(' '));
let last = s8.slice(s8.lastIndexOf(' ')+1);
let middle = s8.slice(s8.indexOf(' '), s8.lastIndexOf(' ') + 1);

console.log(last + middle + first);


/*
Task10

Requirement:
Write a program that counts the number of words in a given sentence as a String. 
Assume you will not be given redundant whitespaces and at least one word.

Test Data 1: let s9 = " Good morning";
Expected Result 1: 2

Test Data 2: let s9 = "Hello    ";
Expected Result 2: 1

Test Data 3: let s9 = "I like Apple";
Expected Result 3: 3

Test Data 4: let s9 = "JavaScript is nice to learn";
Expected Result 4: 5


ReqEx  -> Regular Expressions
*/

let s9 = " Good        morning     ";
console.log(s9.trim().split(/\s+/)); // /\s+/ many numbers of  --- s means space



/*

Task01

Requirement:

Write a function named as tripleWord() which takes a string word as an argument and returns the given word back tripled when invoked.

NOTE: Assume you will not be given an empty word.

Examples:

tripleword("Tech") -> "TechTechTech"

tripleWord("Global") -> "GlobalGlobalGlobal"

*/

const tripleWord = word => {
    return word + word + word
}

console.log(tripleWord('Tech'));

// Or

const tripleWord2 = word => {
    return word.repeat(3)
}

console.log(tripleWord2('Tech'));

/*
Write a function named as has4() which takes a string word as an argument and returns true if given string has at least 4 characters, and false otherwise when invoked.
 Examples:
has4("Tech")  -> true
has4("Global")  -> true
has4("")  -> false
has4("12345")  -> true
has4("abc")   -> false
*/

function has4(word) {
    return word.length >= 4;
}

console.log(has4('hey'));
console.log(has4('Tech'));
console.log(has4('Global'));
console.log(has4(''));
console.log(has4('12345'));
console.log(has4('abc'));



// Or

const has4 = word => {
    return word.length >= 4;
}

console.log(has4('hey'));
console.log(has4('Tech'));
console.log(has4('Global'));
console.log(has4(''));
console.log(has4('12345'));
console.log(has4('abc'));

/*
Write a function named as celciusToFahrenheit() which takes a number
to be considered as Celcius value and returns the Fahrenheit value when
invoked.
Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32
to perform the conversion from Celsius to Fahrenheit.
•Multiply the Celsius temperature by 9.
•Divide the result by 5.
•Add 32 to the result.
Examples:
celciusToFahrenheit(20)  -> 68
celciusToFahrenheit(25)  -> 77
celciusToFahrenheit(0)  -> 32
celciusToFahrenheit(-10)  -> 14
*/

const celciusToFahrenheit = degree => {
    return ((degree * 9) / 5 + 32);
}

console.log(celciusToFahrenheit(20));
console.log(celciusToFahrenheit(25));
console.log(celciusToFahrenheit(0));
console.log(celciusToFahrenheit(-10));

// Or

function celsiusToFahrenheit (celsius) {
    return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(20));
console.log(celsiusToFahrenheit(25));
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(-10));

/*
Write a function named as kgToPounds() which takes a number to be
considered as Kilograms value and returns the Pounds value when
invoked.
Conversion Formula: The function uses the formula kilogram * 2.2 to
perform the conversion from Kilograms to Pounds.
•Multiply the Kilograms value by 2.2.
Examples:
kgToPounds(1)  -> 2.2
kgToPounds(20)  -> 44
kgToPounds(75)  -> 165
kgToPounds(100)  -> 220
*/

function kgToPound (kilogram) {
    return Math.round(kilogram * 2.2 * 10) / 10;
}

console.log(kgToPound(1));
console.log(kgToPound(20));
console.log(kgToPound(75));
console.log(kgToPound(100));


// Or ( Above is better because i made it :D )

const kgToPounds = kg => {
let pounds = (kg * 2.2).toFixed(1);

let poundsAsStr = pounds + ""

let poundsSplit = poundsAsStr.split('.');

if (poundsSplit [1] == 0) pounds = poundsSplit [0]

return pounds;
}
console.log(kgToPounds(1));
console.log(kgToPounds(20));
console.log(kgToPounds(75));
console.log(kgToPounds(100));

/*
Write 2 functions named as rectangleArea() and rectanglePerimeter()
which calculate the area and perimeter of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula:
•Area: x * y
•Perimeter 2 * (x + y)
Examples:
rectangleArea(5, 4)  -> 20
rectangleArea(3, 7)  -> 21
rectangleArea(6, 10)  -> 60
rectanglePerimeter(5, 4)  -> 18
rectanglePerimeter(3, 7)  -> 20
rectanglePerimeter(6, 10)  -> 32
*/

function rectangleArea (sd1, sd2) {
    return sd1 * sd2;
}
function rectangleParimeter (sd1, sd2) {
    return (sd1 + sd2) * 2;
}
console.log(rectangleArea(5, 4));
console.log(rectangleArea(3, 7));
console.log(rectangleArea(6, 10));
console.log(rectangleParimeter(5, 4));
console.log(rectangleParimeter(3, 7));
console.log(rectangleParimeter(6, 10));

/*
Write 2 functions named as squareArea() and squarePerimeter() which
calculate the area and perimeter of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion Formula:
•Area: x * x
•Perimeter 4 * x
Examples:
squareArea(5)  -> 25
squareArea(3)  -> 9
squareArea(6)  -> 36
squarePerimeter(5)  -> 20
squarePerimeter(3)  -> 12
squarePerimeter(6)  -> 24
*/
function quareArea(sd1) {
    return sd1 * sd1;
}
function squarePerimeter (sd1) {
    return (sd1 * 4);
}
console.log(quareArea(5));
console.log(quareArea(3));
console.log(quareArea(6));
console.log(squarePerimeter(5));
console.log(squarePerimeter(3));
console.log(squarePerimeter(6));



/*
Write a function named as countWords() which takes a String and returns
the number of words that are in the string
countString("Hello, my name is John Doe") -> 6
*/

const countString = str => {
    let strAsArr = str.split(/\s+/)
    return strAsArr;
}
console.log(countString("Hello, my name is John Doe").length);

// or Volkan's way
function countstr (word) {
    return word.split(/\s+/);
}

console.log(countstr('Hello,    my name     is John Doe').length);

// variable hoistings


console.log(x);// ReferenceError: Cannot access 'x' before initialization

var x = 5;


// function hoisting



const sayHi = function sayHi() {
console.log('Hi');

}
sayHi();
sayHi();


/**
 * returns a random number between two numbers
 * @param {*} start starting number - inclusive
 * @param {*} end ending number - inclusive
 */

function getRandomNumber(start, end) {
    let max = Math.max(start, end);
    let min = Math.min(start, end);
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  module.exports.getRandomNumber = getRandomNumber;

/*
Task 01: Manipulating Strings and Numbers
Requirement:

Create a program that takes the following inputs:
A string that contains a full name (e.g., "John Doe").
A number representing a year (e.g., 1995).
Your task is to:

Extract the first name and last name from the string.
Capitalize the first letter of the first and last name.
Calculate the age of the person based on the current year (2025).
Print the following outputs:
First name: [First Name]
Last name: [Last Name]
Age: [Calculated Age]
*/

let fullName = 'volkan   yokIkinciIsmim tutunculer';
let bornYear = 1991;

let nameParts = fullName.split(/\s+/);
let currentYear = new Date().getFullYear();

console.log(`First name: ${nameParts[0][0].toUpperCase() + nameParts[0].slice(1)}`);

console.log(`Last name: ${nameParts[nameParts.length - 1][0].toUpperCase() + nameParts[nameParts.length - 1].slice(1)}`);

console.log(`Age: ${currentYear - bornYear}`);



console.log('I am learning if else statements');

if (false){
    console.log('I AM AN IF BLOCK');
}

console.log('End of the program');


console.log('I am learning if else statements');

let mood = true;

if (mood) {
    console.log('ALL GOOD!')
}
else {
    console.log('HELL')
}

console.log('End of the program');


/*
English exam
Passing score is 60 or above

We will write a program to check if we pass the exam or failed.

60 or above -> PASS
else -> FAIL

Asagidaki gibi kontrol yap

EDGE SCENARIOS:
59
60
61

NICE TO HAVE:
30
100

STILL GOOD TO HAVE
'Hello'
null
undefined

*/

let examScore = 59;

if (examScore >= 60){
    console.log('PASS');
}
else {
    console.log('FAIL');
}

/*
// Short omitting curly braces ONE Statement if (examScore < 60) console.log('FAIL'); else console.log('PASS');
*/

/*
Retirement age is 65

We will write a program to check if we can be retired or not.

age is greater than or equal 65 -> YOU CAN GET RETIRED
else -> YOU CANNOT GET RETIRED!!!
*/
rAge = 65

if (rAge >= 65 ){
    console.log('YOU CAN GET RETIRED');
}
else {
    console.log('YOU CANNOT GET RETIRED!!!');
}

let examScore = 60;

let result = examScore >= 60 ? 'PASS' : 'FAIL';

console.log(result);

// OR

examScore >= 60 ? console.log('PASS') : console.log('FAIL');

// OR

console.log(examScore >= 60 ? 'PASS' : 'FAIL');

// Preferred

let resultt = examScore >= 60 ? 'PASS': 'FAIL';

console.log(resultt);

let age = 65;
let retirementAllowed = age >=65 ? 'YES': 'NO';
console.log(retirementAllowed);


/*
                        ----   Ternary      ----
let retirementAllowed = age >=65 ? 'YES': 'NO';
                      -condition- -true- -false-
*/

let gender = 'female' ;

let fname = gender === 'female' ? 'Jane' : 'John';

console.log(fname);



/*
Write program that tells if the day is Weekend or a Weekday
0 or 6 -> Weekend
1-5 -> weekday
*/
const date = new Date();

let dayOfTheWeek = date.getDay(); // 0-Sunday 6-Saturday
console.log(dayOfTheWeek);

let today = dayOfTheWeek === 0 || dayOfTheWeek === 6 ? 'Weekend' : 'Weekday';
console.log(today);


const { getRandomNumber} = require('./../utils/MathHelper.js');

/* get ramdon number between -5 and 5. find if number is POS, NEG, NATURAL
*/

let ran1 = getRandomNumber(-5, 5);
console.log(`The random num1 is = ${ran1}`);

if (ran1 >0) {
    console.log('POS');
}
else if (ran1 == 0) {
    console.log('NEURTAL');
}
else {
    console.log('NEG');
}

// OR

let result1 = ran1 >0 ? 'POS' : ran1 == 0 ? 'NEUTRAL' : 'NEG';
console.log(result1);

console.log('End of program!')

const { getRandomNumber} = require('./../utils/MathHelper.js');

/* get ramdon number between -5 and 5. find if number is POS, NEG, NATURAL
*/

let ran1 = getRandomNumber(-5, 5);
console.log(`The random num1 is = ${ran1}`);

if (ran1 >0) {
    console.log('POS');
}
else if (ran1 == 0) {
    console.log('NEURTAL');
}
else {
    console.log('NEG');
}

// Nested if-else statements

if(ran1 > 0) {
    console.log('POS');
}
else {
    if (ran1 == 0) {
        console.log('NEUTRAL');
    }
    else {
        console.log('NEG');
    }
}


let username = 'TechGlobal'; // TechGlobal
let password = 'pasword' // Test1234

if (username === 'TechGlobal') {
    if (password === 'Test1234') {
        console.log('You are logged in');
    }
    else {
        console.log('Invalid Password. This password used by user John.Doe !');
    }
}
else {
    console.log('Invalid Username entered!');
}



/*
Generate a random number between 1 and 12 (both inclusive) are considered as months
1 January
.
.
12 December

Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/
const { getRandomNumber } = require('./../utils/MathHelper.js');
let month = getRandomNumber(1, 12);
console.log(month);
if (month == 12 || month == 1 || month == 2) {
    console.log('Winter')
}
else if (month == 3 || month == 4 || month == 5) {
    console.log('Spring')
}
else if (month == 6 || month == 7 || month == 8) {
    console.log('Summer')
}
else if (month == 9 || month == 10 || month == 11) {
    console.log('Fall')
}

// OR

if (month === 12 || month === 1 || month === 2) console.log('Winter');
else if (month === 3 || month === 4 || month === 5) console.log('Spring');
else if (month === 6 || month === 7 || month === 8) console.log('Summer');
else console.log('Fall');

// OR

if (month === 12 || month === 1 || month === 2) console.log("Winter");
else if (month <= 5) console.log("Spring");
else if (month <= 8) console.log("Summer");
else console.log("Fall");

// OR

let season =
    month === 12 || month === 1 || month === 2
        ? "Winter" : month <= 5
            ? "Spring" : month <= 8
                ? "Summer" : "Fall";

console.log(season);
/// condition ? valueIfTrue : valueIfFalse


let price = 0;
let brand = 'Samsung';
let ssd = 128 ;
let color = 'Black';

if (brand === 'iPhone') {
    price += 1000;
    if (ssd === 16) price += 100;
    else if (ssd === 32) price += 150;
    else if (ssd === 64) price += 250;
    else if (ssd === 128) price += 400;
    else if (ssd === 256) price += 500;
    else if (ssd === 512) price += 600;

    if (color !== 'white') price +=100;
}
else {
    price += 750;
    if (ssd === 16) price += 50;
    else if (ssd === 32) price += 100;
    else if (ssd === 64) price += 200;
    else if (ssd === 128) price += 300;
    else if (ssd === 256) price += 400;
    else if (ssd === 512) price += 500;

    if (color !== 'white' && color !== 'black') price +=50; // It was if (color !== 'white' || color !== 'black') price +=50 ... || or is wrong here.. meaning is its not white its not black. two false means in or true and calculation adds 50 dollars. thats why it should be &&. this is debuggers and ours job to find this kind of things.
}

console.log(`Your custon ${brand} with ${ssd} GB SSD and ${color} color is $${price}`)


const { getRandomNumber } = require('./../utils/MathHelper.js');

let ran1 = getRandomNumber(1, 3);
console.log(`Random number is ${ran1}`);

/*
if (ran1 === 1) {
    console.log('ONE');
}
else if (ran1 === 2){
    console.log('TWO');
}
else {
    console.log('THREE');
}
*/

switch(ran1) {
    case 1:
        console.log('ONE');
        break;
    case 2:
        console.log('TWO');
        break;
    default:
        console.log('THREE');    
}

console.log('End of the program!');

// This is something not available in java-C#

const { getRandomNumber } = require('./../utils/MathHelper.js');

let ran1 = getRandomNumber(-100, 100);
console.log(`Random number is ${ran1}`);

switch (true) {
    case ran1 > 0:
        console.log('POS');
        break;
    case ran1 < 0:
        console.log('NEG');
        break
    default:
        console.log('NEUTRAL');
}

// It Same As below but in switch format
if(ran1 > 0) {
    console.log('POS');
}
else {
    if (ran1 == 0) {
        console.log('NEUTRAL');
    }
    else {
        console.log('NEG');
    }
}

const date = new Date();

let dayOfTheWeek = date.getDay(); // 0-Sunday 6-Saturday
console.log(dayOfTheWeek);

/*
Write program that tells if the day is Weekend or a Weekday
0 or 6 -> Weekend
1-5 -> weekday
*/

if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
    console.log('Weekend');
}
else {
    console.log('Weekday');
}

switch (true) {
    case dayOfTheWeek === 0 || dayOfTheWeek === 6:
        console.log('Weekend');
        break;
    default:
        console.log('Weekday');
}

switch (dayOfTheWeek) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Weekday');
        break;

    default:
        console.log('Weekend');
}

switch (dayOfTheWeek) {
    case 0:
    case 6:
        console.log('Weekend');
        break;
    default:
        console.log('Weekday');
}

// Or with Ternary
let result = dayOfTheWeek === 0 || dayOfTheWeek === 6 ? 'Weekend' : 'Weekday';
console.log(result);




function EvenOdd(number) {
    if (number % 2 === 0) {
        return 'EVEN';
    }
    else {
        return 'ODD';
    }
}

console.log(EvenOdd(2));
console.log(EvenOdd(3));

function evenOdd(number) {
    let result = number % 2 == 0 ? 'EVEN' : 'ODD';
    return result;
}

console.log(even0dd(2));
console.log(even0dd(3));

// OR 

function evenOdd(number) {
    return number % 2 === 0 ? 'EVEN' : 'ODD';
}

console.log(evenOdd(2));
console.log(evenOdd(3));

function posNegZero(number) {
    if (number > 0) {
        return 'Positive'
    }
    else if (number < 0) {
        return 'Negative'
    }
    return 'Zero';
}

// OR

function posNegZero(number) {
    if (number > 0) return 'Positive'
    else if (number < 0) return 'Negative'
    return 'Zero';
}

// OR - Ternery

function posNegZero(number) {
    return number > 0 ? 'POS' : number < 0 ? 'Neg' : 'Zero';
}

// OR - arrow

const posNegZero = (number) => {
    return number > 0 ? 'POS' : number < 0 ? 'Neg' : 'Zero';
}

console.log(posNegZero(1));
console.log(posNegZero(0));
console.log(posNegZero(-1));



/*
Write function that takes a name and check if it starts with 'E' or 'e' and returns a boolean
Function name is startE.
NOTE: If the given name is empty -> then return false

startE('Emily') -> true
startE('emily') -> true 
startE('Alex') -> false 
startE('') -> false
startE('John') -> false
*/

function startE(name) {
    if (name === ''){
        return false;
    }

    return name[0] === 'E' || name[0] === 'e';
}
console.log(startE('Emily')); 
console.log(startE('emily')); 
console.log(startE('Alex'));  
console.log(startE(''));     
console.log(startE('John')); 
// OR 

function startE(name){
    return name.toLowerCase().startsWith("e"); 
}

console.log(startE('Emily')); 
console.log(startE('emily')); 
console.log(startE('Alex'));  
console.log(startE(''));     
console.log(startE('John')); 
// OR 

const startEArrow = name => name.toLowerCase().startsWith('e');
console.log(startEArrow('Emily')); 
console.log(startEArrow('emily')); 
console.log(startEArrow('Alex'));  
console.log(startEArrow(''));     
console.log(startEArrow('John')); 



/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false
*/

function divisible5(number) {
    if (number % 5 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(divisible5(7));
console.log(divisible5(0));
console.log(divisible5(10));

//OR 

function divisible5(number){
    return number % 5 === 0;
}
console.log(divisible5(7));
console.log(divisible5(0));
console.log(divisible5(10));


/*
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back

fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'
*/


function fooBar(value) {
    if (value % 5 === 0 && value % 7 === 0) {
        return 'foobar'
    }
    else if (value % 7 === 0) {
        return 'bar';
    }
    else if (value % 5 === 0) {
        return 'foo';
    }
    else {
        return value;
    }

}


// OR 

const fooBar = number1 =>{
    return number1 % (5 * 7) === 0 ? 'foobar' : number1 % 5 === 0 ? 'foo' : number1 % 7 === 0 ? 'bar' : number1
}
console.log(fooBar(2));
console.log(fooBar(3));
console.log(fooBar(5));
console.log(fooBar(10));
console.log(fooBar(14));
console.log(fooBar(0));
console.log(fooBar(35));
console.log(fooBar(70));

// TASK 1

console.log('I start to practice "JavaScript" today, and I like it.');
console.log('The secret of getting ahead is getting started.');
console.log('"Don\'t limit yourself. "');
console.log('Invest in your dreams. Grind now. Shine later.');
console.log("It's not the load that breaks you down, it's the way you carry it.");
console.log('The hard days are what make you stronger.');
console.log('You can waste your lives drawing lines. Or you can live your life crossing them.');


// TASK 2

console.log('\tJavaScript is a high-level programming language primarily used to \nbuild web applications. It is not limited to the web; it can also be used \nfor the backend development with technologies like Node.js.\n\n\tIt is open source and has a huge community support, which means \nthere are plenty of resources and support available for learning. It \nuses a syntax like other programming languages and easy to learn'
)

// TASK 3

let myAge = 34;
let myFavoriteNumber = 13;
let myHeight = 1.84;
let myWeight = 104;
let myFavoriteLetter = 'F';

console.log('My Age:' + myAge);
console.log('My Favorite Number:' + myFavoriteNumber);
console.log('My Height:' + myHeight);
console.log('My Height:' + myWeight);
console.log('My Favorite Letter:' + myFavoriteLetter);

// TASK 4

let num1 = 25;
let num2 = 35;

console.log('The sum of the number = ' + (num1 + num2));

// TASK 5

let n1 = 5;
let n2 = 7;

console.log('The product of the number = ' + (n1 * n2));

// TASK 6

let number1 = 24;
let number2 = 10;

console.log('The sum of the number = ' + (number1 + number2));
console.log('The product of the number = ' + (number1 * number2));
console.log('The subtraction of the number = ' + (number1 - number2));
console.log('The division of the number = ' + (number1 / number2));
console.log('The remainder of the number = ' + (number1 % number2));

// TASK 7

let i1 = 7;
let i2 = 11;

console.log('The average of the numbers is: '+(i1 + i2)/2);

// TASK 8

let a1 = 6;
let a2 = 10;
let a3 = 12;
let a4 = 15;
let a5 = 17;

console.log('The average of the numbers is: '+((a1 + a2 + a3 + a4 + a5)/5));

// TASK 9

let b1 = 5;
let b2 = 6;
let b3 = 10;

console.log('The ' + b1 + ' multiplied with ' + b1 + ' is = ' + (b1 ** 2));
console.log('The ' + b2 + ' multiplied with ' + b2 + ' is = ' + (b2 ** 2));
console.log('The ' + b3 + ' multiplied with ' + b3 + ' is = ' + (b3 ** 2));

// TASK 10

let side = 7;

console.log('The perimeter of the square = ' + (side * 4));
console.log('The area of the square = ' + (side * side));

// TASK 11

let favBook = 'JS Algorithms & Data Structures';
let favColor = 'Blue';
let favNumber = 7;

console.log('The favorite book is ' + favBook + '\nThe favorite color is ' + favColor + '\nThe favorite number is ' + favNumber);

// TASK 12

let firstName = 'John';
let lastName = 'Doe';
let age = 45;
let emailAddress = 'johndoe@gmail.com';
let phoneNumber = '(123) 123 1234';
let address = '123 st Chicago IL 12345';

console.log('\tUser who joined this program is ' + firstName + ' ' + lastName + '. ' + firstName + '`s age is ' + age + '.' + '\n' + firstName + '`s email address is ' + emailAddress + ', phone number is  ' + '\n' + phoneNumber + ', and address is ' + address + '.');


// TASK 1 

let str1 = 5, str2 = 2;

console.log(`The sum of ${str1} and ${str2} is = ${(str1 + str2)}`);
console.log(`The product of ${str1} and ${str2} is = ${(str1 * str2)}`);
console.log(`The division of ${str1} and ${str2} is = ${(str1 / str2)}`);
console.log(`The subtraction of ${str1} and ${str2} is = ${(str1 - str2)}`);
console.log(`The remainder of ${str1} and ${str2} is = ${(str1 % str2)}`);
console.log(`The exponentiation of ${str1} and ${str2} is = ${(str1 ** str2)}`);

// TASK 2

let s1 = 200, s2 = -50;

console.log(`The greatest value is = ` + Math.max(s1, s2));
console.log(`The smallest value is = ` + Math.min(s1, s2));
console.log(`The average is = ` + (s1 + s2)/2);
console.log(`The absolute differance is = ` + Math.abs(s1 - s2));

// TASK 3

let start = 1;
let end = 50;

let num1 = Math.floor(Math.random() * (end - start + 1)) + start;
let num2 = Math.floor(Math.random() * (end - start + 1)) + start;

console.log(`The absolute difference between numbers is = ` + Math.abs(num1 - num2));

// TASK 4

let strts = 1;
let ends = 50;

let n1 = Math.floor(Math.random() * (ends - strts + 1)) + strts;
let n2 = Math.floor(Math.random() * (ends - strts + 1)) + strts;
let n3 = Math.floor(Math.random() * (ends - strts + 1)) + strts;
let n4 = Math.floor(Math.random() * (ends - strts + 1)) + strts;
let n5 = Math.floor(Math.random() * (ends - strts + 1)) + strts;

/*
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
*/

console.log(`The max value = ` + Math.max(n1, n2, n3, n4, n5));
console.log(`The min value = ` + Math.min(n1, n2, n3, n4, n5));

// TASK 5

let startNum = 50;
let endNum = 100;

let number1 = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
let number2 = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
let number3 = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;

console.log(`The number 1 = ${number1}`);
console.log(`The number 2 = ${number2}`);
console.log(`The number 3 = ${number3}`);
console.log(`The sum of numbers is = ${number1 + number2 + number3}`);

// TASK 6

let sNumber = 1;
let eNumber = 100;
let greater = 25;

let numberOne = Math.floor(Math.random() * (eNumber - sNumber + 1)) + sNumber;
let numberTwo = Math.floor(Math.random() * (eNumber - sNumber + 1)) + sNumber;
let numberThree = Math.floor(Math.random() * (eNumber - sNumber + 1)) + sNumber;

/*
console.log(numberOne);
console.log(numberTwo);
console.log(numberThree);
*/

console.log(numberOne > greater && numberTwo > greater && numberThree > greater);

// TASK 7

let name = 'David';

console.log(`The length of the name is = ${(name.length)}`);
console.log(`The last character in the name is = ${(name.at(-1))}`);
console.log(`The first 3 characters in the name are = ${(name.slice(0, 3))}`)
console.log(`The first 3 characters in the name are = ${(name.slice(name.length - 3))}`)

const { getRandomNumber } = require('./../utils/MathHelper.js')
// TASK 1

num1 = getRandomNumber(1, 100);
num2 = getRandomNumber(1, 100);
num3 = getRandomNumber(1, 100);

console.log((num1 + num2 + num3) / 3 <= 50)

/*
console.log(num1);
console.log(num2);
console.log(num3);
*/

// TASK 2

number1 = getRandomNumber(1, 3);
number2 = getRandomNumber(1, 3);
number3 = getRandomNumber(1, 3);

function match(number1, number2, number3) {
    if (number1 === number2 && number2 === number3) {
        return 'TRIPLE MATCH';
    }
    else if (number1 === number2 || number1 === number3 || number2 === number3) {
        return 'DOUBLE MATCH';
    }
    else {
        return 'NO MATCH';
    }
}
/*
console.log(match(number1, number2, number3));
console.log(number1);
console.log(number2);
console.log(number3);
*/

//TASK 3

function hasA(string) {
    return /^a/i.test(string);
}
/*
console.log(hasA("arda"));
console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));
*/


// TASK 4

function doubleOrTripleWord(string) {
    if (string.length % 2 === 0){
        return (`"${string+string+string}"`);
    }

    else if (string.length % 2 === 1 && /[1-9a-zA-Z]/.test(string)) {
        return (`"${string+string}"`);
    }
    else {
        return `"${string}"`;
    }
}
/*
console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));
*/


// TASK 5

function firstWord(string) {
    if (/[a-zA-Z]/.test(string)){
    return (string.trim().split(/\s+/).find(word =>/[a-zA-Z]/.test(word))); 
    }
    else {
        return `"${""}"`;
    }
}
/*
console.log(firstWord("  I   have     pen"))
console.log(firstWord("55555 my phone number"))
console.log(firstWord("Hello World"));
console.log(firstWord("I like JavaScript"));
console.log(firstWord("Hello"));
console.log(firstWord(""));
console.log(firstWord(" "));
*/


// TASK 6

function lastWord(string) {
    if (/[a-zA-Z]/.test(string)){
    return (string.trim().split(/\s+/).findLast(word =>/[a-zA-Z]/.test(word))); 
    }
    else {
        return `"${""}"`;
    }
}
/*
console.log(lastWord("  I   have     pen"))
console.log(lastWord("my phone number 5555"))
console.log(lastWord("Hello World"));
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello"));
console.log(lastWord(""));
console.log(lastWord(" "));
*/


// TASK 7

function fLastWord(string) {
    if (/[a-zA-Z]/.test(string)){
        return ((string.trim().split(/\s+/).find(word =>/[a-zA-Z]/.test(word)))+(string.trim().split(/\s+/).findLast(word =>/[a-zA-Z]/.test(word)))); 
    }
    else {
        return `"${""}"`;
    }
}
/*
console.log(fLastWord("  I   have     pen"))
console.log(fLastWord("5555  my phone number 5555"))
console.log(fLastWord("Hello World"));
console.log(fLastWord("I like JavaScript"));
console.log(fLastWord("Hello"));
console.log(fLastWord(""));
console.log(fLastWord(" "));
*/

// TASK 8

function startVowel (string) {
    return /^[aeiou]/i.test(string)
}
/*
console.log(startVowel("Hello"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel(" "));
console.log(startVowel("123"));
*/


// TASK 9

function swap4(string) {
    if (string.trim(/\s+/).length >= 8) {
        let frst = string.slice(0, 4);
        let middle = string.slice(4, string.length - 4);
        let lst = string.slice(string.length - 4, string.length);
        return (lst + middle + frst)
    }
    else {
        return "";
    }
}

/*
console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4("  "));
console.log(swap4("Apple"));
console.log(swap4("          ")); 
*/

// TASK 10

function swapFirstLastWord(string) {
    string = string.replace(/\s+/g, " ").trim();
    if (string.indexOf(' ') > 0) {
        let frst = string.slice(0, string.indexOf(' '));
        let lst = string.slice(string.lastIndexOf(' ') + 1);
        let middle = string.slice(string.indexOf(' '), string.lastIndexOf(' ') + 1);
        return lst + middle + frst;
    }
    else {
        return "''";
    }
}
/*
console.log(swapFirstLastWord("      I like     JavaScript      "));
console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord("    "));
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello   "));
*/

/*
Task01

Requirement:
Write a program that extracts expected values from a given String using JS 
String functions.

"I like apples and oranges"  -> "APPLE"
"JavaScript is not a scripting programming language"   -> "JavaScript"
"I don't like books"  -> "I like books"
*/

let str1 = "I like apples and orange";
let str2 = "JavaScript is not a scripting programming language";
let str3 = "I don't like books";

console.log(str1.slice(7, 12).toUpperCase());
console.log(str2.slice(0, 10));
console.log(str3[0] + str3.slice(7));
// Or
console.log(str3.replace("don't ",''));



/*
Task02

Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 
-if it has any vowel, then print true
-Else, print false
Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1: let s1 = "JavaScript";
Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true

Test Data 2: let s1 = "";
Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false
*/

let s1 = "JavaScript"

console.log('The length is = ' + s1.length);
console.log('The first char is = ' + s1.at(0));
console.log('The last char is = ' + s1.at(-1));
/*
s1 = s1.toLowerCase();
let hasVowel = s1.includes('a') || s1.includes('e') || s1.includes('i') || s1.includes('u') || s1.includes('o')
*/
let hasVowel = /[aeiouAEIOU]/i.test(s1);
console.log(hasVowel);


/*
Task03

Requirement:
Assume that you are given a String of any odd length. 
Find the middle character for the given String. 

Test Data 1: let s2 = "x";
Expected Result 1: "x"

Test Data 2: let s2 = "abc";
Expected Result 2: "b"

Test Data 3: let s2 = "civic";
Expected Result 3: "v"
*/

let s2 = "civici";

console.log(s2[(s2.length-  1 )/2]);


/*
Task04

Requirement:
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

Test Data 1: let s3 = "";
Expected Result 1: ""

Test Data 2: let s3 = "abcd";
Expected Result 2: "bc"

Test Data 3: let s3 = "JavaScript";
Expected Result 3: "Sc"


Toyota -> yo
*/

let s3 = 'JavaScript';
console.log(s3[(s3.length)/2-1]+s3[(s3.length)/2]);

// Teacher's solution

let str = 'JavaScript'
console.log(str.slice(str.length / 2 - 1, str.length / 2 + 1));

/*
Task05

Requirement:
Write a program that divides the given String. Assume the length of the 
String will at least be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters

Test Data 1: let s4 = "abcd";
Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = ''

Test Data 2: let s4 = "JavaScript";
Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/

let s4 = 'JavaScript';

console.log(`The first 2 characters are = ${s4.slice(0,2)}`);
console.log(`The last 2 characters are = ${s4.slice(-2)}`);
console.log(`The other characters are = ${s4.slice(2, -2)}`);

/*
Task06

Requirement:
Assume that you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print 
false.

Test Data 1: let s5 = "ab";;
Expected Result 1: true

Test Data 2: let s5 = "abcd";
Expected Result 2: false

Test Data 3: let s5 = "12ab12";;
Expected Result 1: true

Test Data 4: let s5 = "JavaScript";
Expected Result 4: false
*/

let s5 = '12ab12';

console.log(s5.slice(0,2) === s5.slice(-2));

/*
Task07

Requirement:
Write a program that gets rid of first and last characters of given two String values. 
Then, add these two String values to each other and print the result. 

Test Data 1:
let s61 = "orange";
let s62 = "6";
Expected Result 1: rang

Test Data 2:
let s61 = "1234";
let s62 = "Green";
Expected Result 2: 23ree

Test Data 3:
let s61 = "123456";
let s62 = "Blue";
Expected Result 3: 2345lu

Test Data 4:
let s61 = "Yellow";
let s62 = "Red";
Expected Result 4: elloe
*/

let s61 = 'Yellow';
let s62 = 'Red';

console.log(s61.slice(1, (s61.length-1)) + s62.slice(1, (s62.length-1)) );
console.log(`${s61.slice(1, (s61.length-1))}${s62.slice(1, (s62.length-1))}`);
// Teacher's Solution

console.log(s61.slice(1, -1) + s62.slice(1, -1));




/*
Task08

Requirement:
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false

Test Data 1: let s7 = "";
Expected Result 1: false

Test Data 2: let s7 = "red";
Expected Result 2: false

Test Data 3: let s7 = "green";
Expected Result 3: false

Test Data 4: let s7 = "xxbluexx";
Expected Result 4: true
*/

let s7 = 'xxbluexx';

console.log( s7.slice(0,2) === 'xx' && s7.slice(-2) === 'xx');
//or
console.log(s7.startsWith('xx') && s7.endsWith('xx'));

/*
Task09

Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 1: let s8 = "";
Expected Result 1: ""

Test Data 2: let s8 = " ";
Expected Result 2: " "

Test Data 3: let s8 = "I like Apple";
Expected Result 3: "Apple like I"

Test Data 4: let s8 = "JavaScript is nice to learn";
Expected Result 4: "learn is nice to JavaScript"
*/

let s8 = 'JavaScript is nice to learn';

let first = s8.slice(0, s8.indexOf(' '));
let last = s8.slice(s8.lastIndexOf(' ')+1);
let middle = s8.slice(s8.indexOf(' '), s8.lastIndexOf(' ') + 1);

console.log(last + middle + first);


/*
Task10

Requirement:
Write a program that counts the number of words in a given sentence as a String. 
Assume you will not be given redundant whitespaces and at least one word.

Test Data 1: let s9 = " Good morning";
Expected Result 1: 2

Test Data 2: let s9 = "Hello    ";
Expected Result 2: 1

Test Data 3: let s9 = "I like Apple";
Expected Result 3: 3

Test Data 4: let s9 = "JavaScript is nice to learn";
Expected Result 4: 5


ReqEx  -> Regular Expressions
*/

let s9 = " Good        morning     ";
console.log(s9.trim().split(/\s+/)); // /\s+/ many numbers of  --- s means space


/*

Task01

Requirement:

Write a function named as tripleWord() which takes a string word as an argument and returns the given word back tripled when invoked.

NOTE: Assume you will not be given an empty word.

Examples:

tripleword("Tech") -> "TechTechTech"

tripleWord("Global") -> "GlobalGlobalGlobal"

*/

const tripleWord = word => {
    return word + word + word
}

console.log(tripleWord('Tech'));

// Or

const tripleWord2 = word => {
    return word.repeat(3)
}

console.log(tripleWord2('Tech'));

/*
Write a function named as has4() which takes a string word as an argument and returns true if given string has at least 4 characters, and false otherwise when invoked.
 Examples:
has4("Tech")  -> true
has4("Global")  -> true
has4("")  -> false
has4("12345")  -> true
has4("abc")   -> false
*/

function has4(word) {
    return word.length >= 4;
}

console.log(has4('hey'));
console.log(has4('Tech'));
console.log(has4('Global'));
console.log(has4(''));
console.log(has4('12345'));
console.log(has4('abc'));



// Or

const has4 = word => {
    return word.length >= 4;
}

console.log(has4('hey'));
console.log(has4('Tech'));
console.log(has4('Global'));
console.log(has4(''));
console.log(has4('12345'));
console.log(has4('abc'));

/*
Write a function named as celciusToFahrenheit() which takes a number
to be considered as Celcius value and returns the Fahrenheit value when
invoked.
Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32
to perform the conversion from Celsius to Fahrenheit.
•Multiply the Celsius temperature by 9.
•Divide the result by 5.
•Add 32 to the result.
Examples:
celciusToFahrenheit(20)  -> 68
celciusToFahrenheit(25)  -> 77
celciusToFahrenheit(0)  -> 32
celciusToFahrenheit(-10)  -> 14
*/

const celciusToFahrenheit = degree => {
    return ((degree * 9) / 5 + 32);
}

console.log(celciusToFahrenheit(20));
console.log(celciusToFahrenheit(25));
console.log(celciusToFahrenheit(0));
console.log(celciusToFahrenheit(-10));

// Or

function celsiusToFahrenheit (celsius) {
    return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(20));
console.log(celsiusToFahrenheit(25));
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(-10));

/*
Write a function named as kgToPounds() which takes a number to be
considered as Kilograms value and returns the Pounds value when
invoked.
Conversion Formula: The function uses the formula kilogram * 2.2 to
perform the conversion from Kilograms to Pounds.
•Multiply the Kilograms value by 2.2.
Examples:
kgToPounds(1)  -> 2.2
kgToPounds(20)  -> 44
kgToPounds(75)  -> 165
kgToPounds(100)  -> 220
*/

function kgToPound (kilogram) {
    return Math.round(kilogram * 2.2 * 10) / 10;
}

console.log(kgToPound(1));
console.log(kgToPound(20));
console.log(kgToPound(75));
console.log(kgToPound(100));


// Or ( Above is better because i made it :D )

const kgToPounds = kg => {
let pounds = (kg * 2.2).toFixed(1);

let poundsAsStr = pounds + ""

let poundsSplit = poundsAsStr.split('.');

if (poundsSplit [1] == 0) pounds = poundsSplit [0]

return pounds;
}
console.log(kgToPounds(1));
console.log(kgToPounds(20));
console.log(kgToPounds(75));
console.log(kgToPounds(100));

/*
Write 2 functions named as rectangleArea() and rectanglePerimeter()
which calculate the area and perimeter of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula:
•Area: x * y
•Perimeter 2 * (x + y)
Examples:
rectangleArea(5, 4)  -> 20
rectangleArea(3, 7)  -> 21
rectangleArea(6, 10)  -> 60
rectanglePerimeter(5, 4)  -> 18
rectanglePerimeter(3, 7)  -> 20
rectanglePerimeter(6, 10)  -> 32
*/

function rectangleArea (sd1, sd2) {
    return sd1 * sd2;
}
function rectangleParimeter (sd1, sd2) {
    return (sd1 + sd2) * 2;
}
console.log(rectangleArea(5, 4));
console.log(rectangleArea(3, 7));
console.log(rectangleArea(6, 10));
console.log(rectangleParimeter(5, 4));
console.log(rectangleParimeter(3, 7));
console.log(rectangleParimeter(6, 10));

/*
Write 2 functions named as squareArea() and squarePerimeter() which
calculate the area and perimeter of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion Formula:
•Area: x * x
•Perimeter 4 * x
Examples:
squareArea(5)  -> 25
squareArea(3)  -> 9
squareArea(6)  -> 36
squarePerimeter(5)  -> 20
squarePerimeter(3)  -> 12
squarePerimeter(6)  -> 24
*/
function quareArea(sd1) {
    return sd1 * sd1;
}
function squarePerimeter (sd1) {
    return (sd1 * 4);
}
console.log(quareArea(5));
console.log(quareArea(3));
console.log(quareArea(6));
console.log(squarePerimeter(5));
console.log(squarePerimeter(3));
console.log(squarePerimeter(6));



/*
Write a function named as countWords() which takes a String and returns
the number of words that are in the string
countString("Hello, my name is John Doe") -> 6
*/

const countString = str => {
    let strAsArr = str.split(/\s+/)
    return strAsArr;
}
console.log(countString("Hello, my name is John Doe").length);

// or Volkan's way
function countstr (word) {
    return word.split(/\s+/);
}

console.log(countstr('Hello,    my name     is John Doe').length);



const { getRandomNumber } = require('./../utils/MathHelper.js');
/*
Task01

Requirement:
Assume you are given 2 numbers to be 0 or 1.
Print true if they are same number.
Otherwise, print false

Test data 1: 0, 1
Expected result 1: false

Test data 2: 0, 0
Expected result 2: true

Test data 3: 1, 0
Expected result 3: false

Test data 4: 1, 1
Expected result 4: true
*/

let num1 = getRandomNumber(0, 1);
let num2 = getRandomNumber(0, 1);

if (num1 === num2){
    console.log(true);
}
else {
    console.log(false);
}

// Or just

console.log(num1 === num2);

/*
Task02

Requirement:
Assume you are given a single character.
Find if the given character is a letter or digit.
NOTE: if the character is not a letter or digit, print "INVALID INPUT"

Test data 1: "v"
Expected result 1:
"v"  is a letter

Test data 2: "5"
Expected result 2:
"5"  is a digit

Test data 3: "$"
Expected result 3:
INVALID INPUT
*/
// aski table dan bakltik. her karakterin bit codu uzerinden yaptik
let char2 = '$' ;
let char2code = char2.charCodeAt(0);

if(char2code>= 48 && char2code <= 57) {
    console.log(`"${char2}" is a digit`);
}
else if ((char2code >= 65 && char2code <= 90) || (char2code >= 97 && char2code <= 122)) {
    console.log(`"${char2}" is a letter`);
}
else {
    console.log('INVALID INPUT');
}


/*
Task03

Requirement:
Assume you are given a single character.
Find if the given character is a lowercase or an 
uppercase letter.
NOTE: if the character is not a letter, print "INVALID INPUT"

Test data 1: "a"
Expected result 1:
"a" is a lowercase letter

Test data 2: "5"
Expected result 2:
"INVALID INPUT"

Test data 2: "N"
Expected result 1:
"N" is an uppercase letter

Test data 4: " "
Expected result 4:
"INVALID INPUT"
*/

let char3 = '5';
let char3code = char3.charCodeAt(0);

if (char3code >= 65 && char3code <= 90) {
    console.log(`"${char3}" is a uppercase letter`);
}

else if (char3code >= 97 && char3code <= 122) {
    console.log(`"${char3}" is a lowercase letter`);
}
else {
    console.log("INVALID INPUT");
}

/*
Task04

Requirement:
Assume you are given a single character.
Find if the given character is a special character or not.
Special character: except space, letters, digits

Test data 1: "a"
Expected result 1:
"a" is not a special 
character

Test data 2: "5"
Expected result 2:
"5" is not a special 
character

Test data 3: "$"
Expected result 3:
"$"  is a special character

Test data 4: " "
Expected result 4:
" " is not a special character
*/

let char4 = '1';
let char4code = char4.charCodeAt(0);

if ((char4code >= 33 && char4code <= 47) || (char4code >= 58 && char4code <= 64) || (char4code >= 91 && char4code <= 96) || (char4code >= 123 && char4code <= 127))  {
    console.log(`"${char4}" is a special character`);
}

else {
    console.log(`"${char4}" is not a special character`);
}

/*
Task05

Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.
NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1: "a"
Expected result 1:
"a" is a vowel

Test data 2: "5"
Expected result 2:
"INVALID INPUT"

Test data 2: "N"
Expected result 1:
"N"  is not a vowel

Test data 4: " "
Expected result 4:
"INVALID INPUT"
*/

let char5 = 'b';
let char5code = char5.charCodeAt(0);
if ((char5code >= 65 && char5code <= 90) || (char5code >= 97 && char5code <= 122)) {
    if ('aeiouAEIOU'.includes(char5)){
        console.log(`"${char5}" is a vowel`)
    }
    else {
        console.log(`"${char5}" is not a vowel`)
    }
}
else {
    console.log('INVALID INPUT')
}

// variable hoistings


console.log(x);// ReferenceError: Cannot access 'x' before initialization

var x = 5;


// function hoisting



const sayHi = function sayHi() {
console.log('Hi');

}
sayHi();
sayHi();

