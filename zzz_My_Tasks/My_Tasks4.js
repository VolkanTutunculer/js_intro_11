// find even number on how many tries

let max = 50;
let min = 1;
let tryied = 1;

let randomNm = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNm);

while (randomNm % 2 !== 0) {
    randomNm = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNm);
    tryied++;

}
console.log(`try num = ${tryied}`);



///// 
/* Get a random name from some libraries till you get a name that starts with A. */

const names = ["John", "Alice", "Bob", "Anna", "Charlie", "Adam", "Eve"];

let randomNameWithA = names[Math.floor(Math.random() * names.length)];
let trying = 1;

while (!randomNameWithA.startsWith('A')) {
    console.log(randomNameWithA);
    randomNameWithA = names[Math.floor(Math.random() * names.length)];
    trying++;
}

console.log(randomNameWithA);
console.log(trying);

///Get a random name from some libraries till you get a name that has length of 6.
const names2 = ["John", "Alice", "Bob", "Anna", "Charlie", "Adam", "Eve", "Volkan"];
let SixcharName = names2[Math.floor(Math.random() * names2.length)];

let trying2 = 1;
while (SixcharName.length !== 6) {
    console.log(SixcharName);
    SixcharName = names2[Math.floor(Math.random() * names2.length)];
    trying2++;
}

console.log(SixcharName)
console.log(trying2);