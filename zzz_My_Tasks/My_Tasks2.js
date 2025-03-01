function randNumb(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randNumb(1, 3));

let maxNumber1 = 5
let minNumber2 = 1

let randNumber = Math.floor(Math.random() * (maxNumber1 - minNumber2 + 1)) + minNumber2;

console.log(randNumber);


function firstLast(str) {
    if (str.length >= 2) {
        return str[0] + str[str.length - 1]
    }
    else {
        return str
    }
}
console.log(firstLast("TechGlobal"))



let max = 10;
let min = 1;

let rndm = Math.floor(Math.random() * (max - min + 1)) + min;
let poundRndm = rndm * 2.2

console.log(`${rndm} kg = ${(poundRndm * 10).toFixed(1) / 10} pounds`);

let min1 = 1;
let max1 = 50;

let rndm1 = Math.floor(Math.random()*(max1-min1+1))+min1;

console.log(rndm1);

let min2 = 1;
let max2 = 100

let rndm2 = Math.floor(Math.random()*(max2-min2+1))+min2;
console.log(rndm2);
if (rndm2 <=50){
  console.log("1st half");
}
else{
  console.log("2nd half");
}