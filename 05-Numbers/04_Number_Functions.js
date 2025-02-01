let num1 = 10.4551;
let num2 = 5;
let num3 = 10;

console.log (num1.toFixed(2)); // 10.46
console.log (num1.toPrecision(5)); // 10.455 

console.log((22.25).toFixed(2)); // 22.25
console.log((2.225).toPrecision(2)); // 2.2

console.log(num2 + num3); // 15
console.log(num2.toString() + num3.toString()); // '510'