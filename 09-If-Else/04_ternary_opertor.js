let examScore = 60;

let result = examScore >= 60 ? 'PASS' : 'FAIL';

console.log(result);

// OR

examScore >= 60 ? console.log('PASS') : console.log('FAIL');

// OR

console.log(examScore >= 60 ? 'PASS' : 'FAIL');

// Preferred

let resultt = examScore >= 60 ? 'PASS': 'FAIL';

console.log(resultt);

let age = 65;
let retirementAllowed = age >=65 ? 'YES': 'NO';
console.log(retirementAllowed);


/*
                        ----   Ternary      ----
let retirementAllowed = age >=65 ? 'YES': 'NO';
                      -condition- -true- -false-
*/

let gender = 'female' ;

let fname = gender === 'female' ? 'Jane' : 'John';

console.log(fname);
