const numbers = [5, 7, 1, 3, 10];


// for loop
//for (let i=0; i < numbers.length; i++){
//console.log(numbers[i]);
//}

// for of loop
//for (const number of numbers){
//    console.log(number);
//}

// forEach
numbers.forEach(function (x) {
    console.log(x);
});

// forEach with arrow function
numbers.forEach((x) => console.log(x));



const names = ['Alex', 'John', 'Jane', 'Victoria'];
// print all the names that has 4 chracters

names.forEach(function (name) {
    if (name.length === 4) {
        console.log(name);
    }
})

// forEach with arrow function (teachers way)
names.forEach((name) => {
    if (name.length === 4) console.log(name);
})

const nums = [5, 3, 2, 1];
// Find sum of numbers: 11                                                      -> prefered way is reduce()
// Find product of numbers: 30                                                  -> prefered way is reduce()
// Create a new array which has all numbers miltiplied by 5: [ 25, 15, 10, 5 ]  -> prefered way is map()

let sumOfNums = 0;
let prodOfNums = 1;
let multi = [];

nums.forEach((num) => {
    sumOfNums += num;
    prodOfNums *= num;
    multi.push(num * 5);
})
console.log(sumOfNums);
console.log(prodOfNums);
console.log(multi);