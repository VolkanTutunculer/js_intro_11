while (condition){

}

// print numbers from 1 to 5

for (let i = 1; i <=5; i++){
    console.log(i);
}

let i = 1
while(i <= 5){
    console.log(i);
    i++;
}

// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 …. 50
for (i = 0 ; i <= 50; i++){
    if ( i % 2 === 0){
        console.log(i);
    }
}

let i = 0;
while(i <= 50){
    if ( i % 2 === 0) console.log(i);
        i++;
}

// Find sum of the numbers from 3 to 7

let sum = 0;
for (let i = 3; i <= 7; i++) {
    sum += i;
}
console.log(sum);

let sum = 0
let i = 3;
while (i <= 7) {
    sum += i;
    i++;
}
console.log(sum);