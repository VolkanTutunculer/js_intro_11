const sleep = true;
const eat = true;

const cat = {
    name: 'Silver',
    eat,  // before eat: eat // we were creating property and put inside. now no need. it understands
    sleep
}

console.log(cat);

const batchNumber = 11;
const program = 'SDET';

const student1 = {
    batchNumber,
    program,
    fullname: 'John Doe'
}

console.log(student1);