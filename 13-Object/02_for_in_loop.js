const batch = {
    number: 11,
    program: 'SDET',
    numberOfStudents: 20
};

// console.log(batch.number);
// console.log(batch.program);
// console.log(batch.numberOfStudents);

for (const key in batch){
    //console.log(batch[key]); // dot notation try to look for key. thats why it will return undefined. we are using bracklet notation
    console.log(key, batch[key]);
}


const arr = ['rome','berlin', 'toronto'];

for(const key in arr){
    console.log(key, arr[key])
}