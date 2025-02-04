// variable hoistings


console.log(x);// ReferenceError: Cannot access 'x' before initialization

var x = 5;


// function hoisting



const sayHi = function sayHi() {
console.log('Hi');

}
sayHi();
sayHi();

