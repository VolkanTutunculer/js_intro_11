const person = { 
    fname: 'John',
    lname: 'Doe',
    age: 25,
};

// John doe will be 30 after 5 years

let years = 5;

console.log(person.fname + ' ' + person.lname + ' will be ' + (person.age+years) + ' after ' + years + ' years.');