/*
Requirement:
Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive​ when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		-> 0    
*/

// Answer 1
function countPos(array) {
    return array.filter(num => num > 0).length;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

// Answer 2 ( my answer)
function countPos(array){
    let countPositive = 0;
    for(const arr of array){
        if (arr > 0){
            countPositive++;
        }
    }
    return countPositive;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]) );


//////


function countA(string){
    return string.split('').filter(strA => strA.toLowerCase().includes('a')).length;
}

console.log(countA("TechGlobal is a QA bootcamp"));