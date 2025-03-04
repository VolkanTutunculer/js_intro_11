const names = ['Mariia', 'Alex', 'John', 'Jane', 'Victoria'];

// Get all the nasmes that have 4 characters: ['Alex', 'John', 'Jane']

const names4 =  names.filter((x) => {
    if(x.length === 4) return true;
    return false;
})

console.log(names4);

// beacuse its turnery we can write like below

const namesFour =  names.filter((x) => x.length === 4);

console.log(namesFour);

// how many names has 'a' or 'A' in it : 4

const namesWithA = names.filter((name) => name.toLowerCase().includes('a'));
console.log(namesWithA.length);

// or we can do like below

console.log(names.filter((name) => name.toLowerCase().includes('a')).length);




const numbers = [10, 5, 100, 77, 50, 65, 0];
// Find all the numbers that are 50 or more -> [100, 77, 50, 65]
const numsMoreThenFifty = numbers.filter((number) => number >= 50);
console.log(numsMoreThenFifty);


const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];
// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2

console.log(fruits.filter((fruit) => fruit.toLowerCase().includes('apple')));
console.log(fruits.filter((fruit) => fruit.toLowerCase().includes('a')).length);
console.log(fruits.filter((fruit) => fruit.toLowerCase().includes('i')).length);


