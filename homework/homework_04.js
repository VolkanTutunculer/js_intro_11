// Task 1
console.log("----Task 1----");

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
};

// Task 2
console.log("----Task 2----");

for (let i = 1; i <= 100; i++) {
    if (i % 6 === 0) {
        console.log(i);
    }
};

// Task 3
console.log("----Task 3----");

for (let i = 100; i >= 50; i--) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// Task 4
console.log("----Task 4----");

for (let i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is = ${i ** 2}`);
}

// Task 5
console.log("----Task 5----");

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);

// Task 6
console.log("----Task 6----");


let min = 1;
let max = 10;

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNum);

let factorial = 1;
for (let i = 1; i <= randomNum; i++) {
    factorial *= i;
}

console.log(factorial);

// Task 7
console.log("----Task 7----");

let counter = 1;
let ranNum;
for (let i = 1; i <= 100; i++) {

    let minNum = 1;
    let maxNum = 100;

    ranNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    counter += i;
    if (ranNum % 5 === 0) {
        break;
    }
}

console.log(`The random number is ${ranNum} and it took ${counter} attempt/s to generate it.
`);

// Task 8
console.log("----Task 8----");

let countries = ["Germany", "Argentina", "Ukraine", "Romania"
]
console.log(countries);
console.log([...countries].sort());

// Task 9
console.log("----Task 9----");

let cartoons = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky']
console.log(cartoons);
console.log(cartoons.includes('Pluto'));


// Task 10
console.log("----Task 10----");

let cartoonCats = ['Garfield', 'Tom', 'Sylvester', 'Azrael']
console.log([...cartoonCats].sort());
console.log(cartoonCats.includes('Garfield') && cartoonCats.includes('Felix'));

// Task 11
console.log("----Task 11----");

let numbers = [10.5, 20.75, 70, 80, 15.75];
console.log(numbers);
for (const num of numbers) {
    console.log(num);
}

// Task 12
console.log("----Task 12----");

let objects = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler']

let count = 0;
let have = 0;

for (const object of objects) {
    if (object.toUpperCase().startsWith('P') || object.toUpperCase().startsWith('B')) {
        count++;
    }
    if (object.toLowerCase().includes('book') || object.toLowerCase().includes('pen')) {
        have++;
    }
}

console.log(`Elements starting with 'B' or 'P' = ${count}`);
console.log(`Elements having 'book' or 'pen' = ${have}`);


// Task 13
console.log("----Task 13----");

let numbersArr = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
let moreThan10 = 0;
let lessThan10 = 0;
let count10 = 0;

for (const num of numbersArr) {
    if (num > 10) moreThan10++;
    if (num < 10) lessThan10++;
    if (num === 10) count10++;
}

console.log(numbersArr);
console.log(`Elements that are more than 10 = ${moreThan10}`)
console.log(`Elements that are less than 10 = ${lessThan10}`)
console.log(`Elements that are 10 = ${count10}`)


// Task 14
console.log("----Task 14---");

let firstArr = [5, 8, 13, 1, 2];
let secondArr = [9, 3, 67, 1, 0];
let greatArr = [];

for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] <= secondArr[i]) {
        greatArr.push(secondArr[i]);
    }
    else {
        greatArr.push(firstArr[i])
    }
}


console.log(firstArr);
console.log(secondArr);
console.log(greatArr);

// Task 15
console.log("----Task 15---");

function firstDuplicate(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return array[i];
            }
        }
    }
    return -1;
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, '5', 3, 7, 4]));
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));



// Task 16
console.log("----Task 16---");

function getDuplicates(array) {
    let dublicateArr = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j] && dublicateArr.includes(array[i]) !== true) {
                dublicateArr.push(array[i]);
            }
        }
    }
    return dublicateArr;
}

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicates([1, 2, 5, 0, 7]));
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo']));
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a']));


// Task 17
console.log("----Task 17---");

function reverseStringWords(string) {
    let words = string.trim().split(/\s+/);
    let reversedWords = words.map(word => word.split('').reverse().join(''));
    return reversedWords.join(' ');
}

console.log(reverseStringWords("Hello World"))
console.log(reverseStringWords("I like JavaScript"))
console.log(reverseStringWords("Hello"))
console.log(reverseStringWords(""))
console.log(reverseStringWords("    "))

// Task 18
console.log("----Task 18---");


function getEvens(num1, num2) {
    let smallEvenToLarge = [];

    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if (i % 2 === 0) {
            smallEvenToLarge.push(i);
        }
    }
    return smallEvenToLarge;
}

console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));

// Task 19
console.log("----Task 19---");


function getMultipleOf5(num1, num2) {
    let divBy5 = [];

    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if (i % 5 === 0) {
            divBy5.push(i);
        }
    }
    if (num1 > num2) {
        return [...divBy5].reverse();
    }
    else return divBy5;
}

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));


// Task 20
console.log("----Task 20---");

function fizzBuzz(num1, num2) {
    let arr = [];

    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if (i % 15 === 0) {
            arr.push('FizzBuzz');
        }
        else if (i % 5 === 0) {
            arr.push('Buzz');
        }

        else if (i % 3 === 0) {
            arr.push('Fizz');
        }

        else arr.push(i)
    }

    if (num1 > num2) {
        arr.reverse();
    }

    return arr.join(' | ');
}


console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));