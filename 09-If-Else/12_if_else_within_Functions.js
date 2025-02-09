function evenOdd(number) {
    let result = number % 2 == 0 ? 'EVEN' : 'ODD';
    return result;
}

console.log(even0dd(2));
console.log(even0dd(3));

// OR 

function evenOdd(number) {
    return number % 2 === 0 ? 'EVEN' : 'ODD';
}

console.log(evenOdd(2));
console.log(evenOdd(3));

function posNegZero(number) {
    if (number > 0) {
        return 'Positive'
    }
    else if (number < 0) {
        return 'Negative'
    }
    return 'Zero';
}

// OR

function posNegZero(number) {
    if (number > 0) return 'Positive'
    else if (number < 0) return 'Negative'
    return 'Zero';
}

// OR - Ternery

function posNegZero(number) {
    return number > 0 ? 'POS' : number < 0 ? 'Neg' : 'Zero';
}

// OR - arrow

const posNegZero = (number) => {
    return number > 0 ? 'POS' : number < 0 ? 'Neg' : 'Zero';
}

console.log(posNegZero(1));
console.log(posNegZero(0));
console.log(posNegZero(-1));



/*
Write function that takes a name and check if it starts with 'E' or 'e' and returns a boolean
Function name is startE.
NOTE: If the given name is empty -> then return false

startE('Emily') -> true
startE('emily') -> true 
startE('Alex') -> false 
startE('') -> false
startE('John') -> false
*/

function startE(name) {
    if (name === ''){
        return false;
    }

    return name[0] === 'E' || name[0] === 'e';
}
console.log(startE('Emily')); 
console.log(startE('emily')); 
console.log(startE('Alex'));  
console.log(startE(''));     
console.log(startE('John')); 
// OR 

function startE(name){
    return name.toLowerCase().startsWith("e"); 
}

console.log(startE('Emily')); 
console.log(startE('emily')); 
console.log(startE('Alex'));  
console.log(startE(''));     
console.log(startE('John')); 
// OR 

const startEArrow = name => name.toLowerCase().startsWith('e');
console.log(startEArrow('Emily')); 
console.log(startEArrow('emily')); 
console.log(startEArrow('Alex'));  
console.log(startEArrow(''));     
console.log(startEArrow('John')); 



/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false
*/

function divisible5(number) {
    if (number % 5 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(divisible5(7));
console.log(divisible5(0));
console.log(divisible5(10));

//OR 

function divisible5(number){
    return number % 5 === 0;
}
console.log(divisible5(7));
console.log(divisible5(0));
console.log(divisible5(10));


/*
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back

fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'
*/


function fooBar(value) {
    if (value % 5 === 0 && value % 7 === 0) {
        return 'foobar'
    }
    else if (value % 7 === 0) {
        return 'bar';
    }
    else if (value % 5 === 0) {
        return 'foo';
    }
    else {
        return value;
    }

}


// OR 

const fooBar = number1 =>{
    return number1 % (5 * 7) === 0 ? 'foobar' : number1 % 5 === 0 ? 'foo' : number1 % 7 === 0 ? 'bar' : number1
}
console.log(fooBar(2));
console.log(fooBar(3));
console.log(fooBar(5));
console.log(fooBar(10));
console.log(fooBar(14));
console.log(fooBar(0));
console.log(fooBar(35));
console.log(fooBar(70));