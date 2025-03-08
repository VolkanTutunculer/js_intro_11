const numbers = [5, 10, 20, 15];

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));


const batch = {
    number: 11,
    program: 'SDET',
    startDate: 'January 20, 2025',
    adress: {
        street: 'street 1',
        city: 'Chicago',
        PO: 1234,
    }
}

const student1 = {
    fname: 'Ayah',
    lname: 'abc',
    ...batch
} // ...batch will call batch information

const student2 = {
    fname: 'Alina',
    lname: 'dfg',
    ...batch,
    address: batch.adress // we can do this for just get the adress
}

console.log(student1);
console.log(student2);




// we could go with for in loop to add batch information. but spread is more better, faster and easy
const student3 = {
    fname: 'volki',
    lname: 'tut',
    ...batch
}
for (const key in batch) {
    student3[key] = batch[key]
}

console.log(student3);

const process = {
    url: 'www.techglobal-training.com',
    username: 'TechGlobal',
    password: 'Test1234',
    
};

const config = {
    env: { ...process }
}

console.log(config);