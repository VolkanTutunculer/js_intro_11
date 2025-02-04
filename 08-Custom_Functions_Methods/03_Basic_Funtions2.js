/*
Write a function which takes a number and return true if the number is even 
or return false if the number is odd

isEven(4)   -> true
isEven(3)   -> false
isEven(0)   -> true
isEven(-2)  -> true
isEven(-7)  -> false
*/

function isEven(number) {
    return (number % 2) === 0;
}
console.log(isEven(4));
console.log(isEven(3));
console.log(isEven(0));
console.log(isEven(-2));
console.log(isEven(-7));



/*
Write a function named initials which takes 2 arguments as fname and lname and 
return initials

initials('John', 'Doe')      -> 'J.D.'
initials('Adam', 'Smith')    -> 'A.S.'
initials('Max', 'Smith')     -> 'M.S.'
*/


function initials(fname, lname) {
    return `${fname[0]}.${lname[0]}.`;
}


console.log(initials('John', 'Doe'));
console.log(initials('Adam', 'Smith'));
console.log(initials('Max', 'Smith'));


/*
Write a function named inits which takes a fullname and return initials

inits('John Doe')      -> 'JD'
inits('Adam smith')    -> 'AS'
inits('max Smith')     -> 'MS'
*/

function inits(fullname) {

    /*
    let fullnameArr = fullname.split(''); // ['', '']
    
    return (fullnameArr[0] [0] + '.' + fullnameArr[1] [0] + '.').toUpperCase();
    */
   
    return `${fullname[0]}.${fullname [fullname.indexOf(' ') + 1]}.`.toUpperCase();
}

console.log(inits('John Doe'));
console.log(inits('Adam smith'));
console.log(inits('max Smith'));

