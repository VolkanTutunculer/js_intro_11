let min = 1;
let max = 100;

let randomNum = Math.floor(Math.random()*(max-min+1))+min;

console.log(randomNum);

function evenOrrOdd(number){
    if (number % 2 === 0){
        return "EVEN";
    }
    else {
        return "ODD"
    }
}

console.log(evenOrrOdd(randomNum));