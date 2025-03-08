const person = {
    fname: 'John',
    lname: 'Doe',
    age: 25
};

const person2 = Object.create(person);

console.log(person);
console.log(person2); // copies as protitype. it comes empty array but if you call with . we are able to see the info
console.log(person2.age);
console.log(person2.fname);

person2.fname = 'Jane'; // it will update the data
console.log(person2.fname);

person2.isAlive = true; // we add new proporty to person2. it wont change parent, only child.
console.log(person);// doesnt have isAlive
console.log(person2); // have isAlive

// now we are using classes. this one is not on use anymore