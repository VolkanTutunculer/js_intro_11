// Requirement:
// Write a function named as firstPos() which takes an 
// array as an argument and returns the first positive 
// element when invoked.
// NOTE: Assume you will not be given an empty array, 
// and it contains only number elements.
// NOTE: Assume there is at least one positive element in 
// the given array.

// Examples:
// firstPos([0, 3, -9,  5, 8])  -> 3
// firstPos([-2, 0, -7, 10, -5])  -> 10
// firstPos([1, 2, 3, -2])                         -> 1


const firstPos1 = arr => {
    for (const ele of arr) {
        if (ele > 0) return ele;
    }
}

console.log(firstPos1([0, 3, -9, 5, 8]))
console.log(firstPos1([-2, 0, -7, 10, -5]))
console.log(firstPos1([1, 2, 3, -2]))


const firstPos2 = arr => arr.filter(ele => ele > 0)[0];

console.log(firstPos2([0, 3, -9, 5, 8]));
console.log(firstPos2([-2, 0, -7, 10, -5]));
console.log(firstPos2([1, 2, 3, -2]));

const firstPos3 = arr => arr.find(ele => ele > 0)

console.log(firstPos3([0, 3, -9, 5, 8]));
console.log(firstPos3([-2, 0, -7, 10, -5]));
console.log(firstPos3([1, 2, 3, -2]));

/*
Requirement:
Write a function named as lastNeg() which takes an 
array as an argument and returns the last negative 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one negative element in 
the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8])  -> -9
lastNeg([-2, 0, -7, 10, -5])  -> -5
lastNeg([1, 2, 3, -2])                         -> -2

*/


const lastNeg = arr => {
    for (const val of arr) {
        if (val < 0) return val;
    }
}

console.log(lastNeg([0, 3, -9, 5, 8]));
console.log(lastNeg([-2, 0, -7, 10, -5]));
console.log(lastNeg([1, 2, 3, -2]));


function lastNeg2(arr) {

    const negativeNumbers = arr.filter(function (number) {
        return number < 0;
    });
    return negativeNumbers[negativeNumbers.length - 1];
}

console.log(lastNeg2([0, 3, -9, 5, 8]));
console.log(lastNeg2([-2, 0, -7, 10, -5]));
console.log(lastNeg2([1, 2, 3, -2]));


const lastNeg3 = arr => arr.filter(ele => ele < 0).at(-1);
console.log(lastNeg3([0, 3, -9, 5, 8]));
console.log(lastNeg3([-2, 0, -7, 10, -5]));
console.log(lastNeg3([1, 2, 3, -2]));


const lastNeg4 = arr => arr.findLast(ele => ele < 0)
console.log(lastNeg4([0, 3, -9, 5, 8]));
console.log(lastNeg4([-2, 0, -7, 10, -5]));
console.log(lastNeg4([1, 2, 3, -2]));


const lastNeg5 = arr => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 0) return arr[i]
    }
}
console.log(lastNeg5([0, 3, -9, 5, 8]));
console.log(lastNeg5([-2, 0, -7, 10, -5]));
console.log(lastNeg5([1, 2, 3, -2]));

/*
Requirement:
Write a function named as firstLongest() which takes 
an array as an argument and returns the longest 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only string elements.
NOTE: If there are 2 element having the longest count of 
characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"])  -> 
"yellow"
firstLongest(["Apple", "Banana", "Orange"])  -> 
"Banana"
firstLongest(["purple", "yellow", "orange"])  -> 
"purple"

*/

const firstLongest = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].length >= arr[j].length) {
                return arr[i];
            }
        }
    }
}

console.log(firstLongest(["red", "blue", "yellow", "white"]));
console.log(firstLongest(["Apple", "Banana", "Orange"]));
console.log(firstLongest(["purple", "yellow", "orange"]));


const firstLongest2 = arr => {
    let longest = arr[0]

    for (const ele of arr) {
        if (ele.length > longest.length) longest = ele
    }
    return longest
}
console.log(firstLongest2(["red", "blue", "yellow", "white"]));
console.log(firstLongest2(["Apple", "Banana", "Orange"]));
console.log(firstLongest2(["purple", "yellow", "orange"]));


const firstLongest3 = arr => arr.reduce((longest, ele) => ele.length > longest.length ? ele : longest)

console.log(firstLongest3(["red", "blue", "yellow", "white"]));
console.log(firstLongest3(["Apple", "Banana", "Orange"]));
console.log(firstLongest3(["purple", "yellow", "orange"]));

const firstLongest4 = arr => arr.reduce((longest, ele) => ele.length > longest.length ? ele : longest)

console.log(firstLongest4(["red", "blue", "yellow", "white"]));
console.log(firstLongest4(["Apple", "Banana", "Orange"]));
console.log(firstLongest4(["purple", "yellow", "orange"]));

/*
Requirement:
Write a function named as min() which takes an array 
as an argument and returns the smallest element when 
invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
 
Examples:
min([0, 3,  5, 8])  -> 0
min([-2, 0, -7, 10, -5])  -> -7
min([1, 2, 3, 15])                 -> 1
*/

const min2 = arr => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i]
    }
    return min
}
console.log(min2([0, 3, 5, 8]))
console.log(min2([-2, 0, -7, 10, -5]))
console.log(min2([1, 2, 3, 15]))


const min = arr => arr.sort((a, b) => a - b)[0]
console.log(min([0, 3, 5, 8]))
console.log(min([-2, 0, -7, 10, -5]))
console.log(min([1, 2, 3, 15]))


const min3 = arr => Math.min(...arr);
console.log(min3([0, 3, 5, 8]))
console.log(min3([-2, 0, -7, 10, -5]))
console.log(min3([1, 2, 3, 15]))

/*
Examples:

commonElements([ 10, 20, 30, 50, 70], [20, 50, 70]) -> [ 20,

50, 70 ]

commonElements([ 30, 50, 70], [20, 100, 300]) -> []

commonElements(["30", "abc", "hi" ], [ 30, "Hi", "abc"]) ->

["abc"]

*/

const commonElements = (arr1, arr2) => {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i])
                break;
            }
        }
    }
    return result
}

console.log(commonElements([10, 20, 30, 50, 70], [20, 50, 70]))
console.log(commonElements([30, 50, 70], [20, 100, 300]))
console.log(commonElements(["30", "abc", "hi"], [30, "Hi", "abc"]))



const commonElements2 = (arr1, arr2) => arr1.filter(ele => arr2.includes(ele));

console.log(commonElements2([10, 20, 30, 50, 70], [20, 50, 70]))
console.log(commonElements2([30, 50, 70], [20, 100, 300]))
console.log(commonElements2(["30", "abc", "hi"], [30, "Hi", "abc"]))



const commonElements3 = (arr1, arr2) => arr1.reduce((common,ele) => arr2.includes(ele) && !common.includes(ele) ? common.concat(ele) : common,[]);
console.log(commonElements3([1,2,2,3], [2,3,4,5]))