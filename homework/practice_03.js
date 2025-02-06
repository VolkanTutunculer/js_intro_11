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



