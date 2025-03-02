const names = ['John', 'Jane', 'Alex', 'Max', 'james'];
// Log each name

for (let name of names) {
    console.log(name);
}


// count how many starts with j or J
let countJ = 0;
for (let startsJ of names) {
    if (startsJ[0].toLowerCase() === 'j') {
        countJ++;
    }
}
console.log(countJ);

// solution with for only

let counter = 0
for (let i = 0; i < names.length; i++) {
    if (names[i][0].toUpperCase() === 'J') counter++;
}
console.log(counter);

// how many name has 4 letter

let countFour = 0;
for (let name of names) {
    if (name.length === 4) {
        countFour++;
    }
}
console.log(countFour);

// teacher solution

let count4 = 0;

for (let i = 0; i < names.length; i++) {
    if (names[i].length === 4) count4++;
}
console.log(count4);