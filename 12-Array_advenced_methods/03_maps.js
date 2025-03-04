const numbers = [5, 3, 2, 20];

// ['odd', 'odd', 'even', 'even']

const oddEven = [];

for (const num of numbers) {
    if (num % 2 == 0) oddEven.push('even');
    else oddEven.push('odd');
}

console.log(oddEven);

// with Map()

const oddEven1 = numbers.map((num) =>{
    if (num % 2 === 0) return 'even';
    return 'odd';
})

console.log(oddEven1);

// or shor version

const oddEven2 = numbers.map((num) => num % 2 === 0 ? 'even' : 'odd');
console.log(oddEven2);

// TASK

const sentences = ['Good evening', 'I like arrays', 'It is Monday'];
// each sentence's first word -> ['Good', 'I', 'It'];

const firstWord = sentences.map((sentence) => sentence.split(' ')[0])
console.log(firstWord);


const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];
// Create a new array storing the given salaries with 2 decimals
// [1000.23, 5234.35, 721.98, 3452.50]

const salriesTwoDec = salaries.map((salary) => salary.toFixed(2))
console.log(salriesTwoDec);