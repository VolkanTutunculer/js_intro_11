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
