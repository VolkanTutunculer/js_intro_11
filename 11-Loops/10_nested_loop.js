for (let i = 1; i <= 3; i++) {
    console.log('Saturday!');
    for (let j = 1; j <= 2; j++) {
        console.log('Hey');
        for (let k = 0; k <= 2; k++) {
            console.log('.');
        }
    }
}


const names = ['Jane', 'Joe'];

for (let i = 0; i < names.length; i++) {
    let currentName = names[i]
    console.log(currentName);
    for (let j = 0; j < currentName.length; j++) {
        console.log(currentName[j]);
    }

}


let count = 0;

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 5; j++) {
        count++;
    }
}
console.log(count);