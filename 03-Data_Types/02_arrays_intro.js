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