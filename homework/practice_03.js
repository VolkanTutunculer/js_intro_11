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
