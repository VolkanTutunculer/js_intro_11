const names = ['john', 'Jane', 'Alex', 'Maria', 'Volkan'];

for (let i = 0; i <= names.length - 1; i++) {
    console.log(names[i]);
}

console.log("end of the program");


// count how many even numbers?
const numbers = [2, 6, 3, -1, 10, 8];

let evenNums = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNums++;
    }
}

console.log(evenNums);



