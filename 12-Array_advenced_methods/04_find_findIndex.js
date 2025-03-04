const nums = [-1, 1, 3, 0, 2, 6 ,8];

// find the first even number from array

let firstEven = nums.find((x) => x % 2 === 0);
let firstEvenIndex =  nums.findIndex((x) => x % 2 === 0);

let firstPos= nums.find((x) => x > 0);


console.log(firstEven);
console.log(firstEvenIndex);
console.log(firstPos);



const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];
// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element that has 4 letters -> Kyiv

let firstFourEl = cities.find((city) => city.length === 4 );
let LastSixEL = cities.findLast((city) => city.length === 6 );
let indexOfLa = cities.findIndex((city) => city === 'LA');
let FirstOfI = cities.find((city) => city.includes('i'));
let LastFourEl = cities.findLast((city) => city.length === 4 );

console.log(firstFourEl);
console.log(LastSixEL);
console.log(indexOfLa);
console.log(FirstOfI);
console.log(LastFourEl);

