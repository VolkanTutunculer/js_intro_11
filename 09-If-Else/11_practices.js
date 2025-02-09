const date = new Date();

let dayOfTheWeek = date.getDay(); // 0-Sunday 6-Saturday
console.log(dayOfTheWeek);

/*
Write program that tells if the day is Weekend or a Weekday
0 or 6 -> Weekend
1-5 -> weekday
*/

if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
    console.log('Weekend');
}
else {
    console.log('Weekday');
}

switch (true) {
    case dayOfTheWeek === 0 || dayOfTheWeek === 6:
        console.log('Weekend');
        break;
    default:
        console.log('Weekday');
}

switch (dayOfTheWeek) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Weekday');
        break;

    default:
        console.log('Weekend');
}

switch (dayOfTheWeek) {
    case 0:
    case 6:
        console.log('Weekend');
        break;
    default:
        console.log('Weekday');
}

// Or with Ternary
let result = dayOfTheWeek === 0 || dayOfTheWeek === 6 ? 'Weekend' : 'Weekday';
console.log(result);




function EvenOdd(number) {
    if (number % 2 === 0) {
        return 'EVEN';
    }
    else {
        return 'ODD';
    }
}

console.log(EvenOdd(2));
console.log(EvenOdd(3));