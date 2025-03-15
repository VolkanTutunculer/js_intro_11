// TASK: create a teacher prototype with fname, lname, age, field properties

function Teacher(fname, lname, age, field) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.field = field;
}


Teacher.prototype.teach = function () {
    console.log(`${this.fname} teaches ${this.field}`);
}

Teacher.prototype.homework = function () {
    console.log(`${this.fname} gives homework`);
}

const teacher1 = new Teacher('John', 'Doe', 35, 'Math');
const teacher2 = new Teacher('Jane', 'Donnely', 55, 'English');
const teacher3 = new Teacher('Sarah', 'Elly', 43, 'Art');
const teacher4 = new Teacher('Adam', 'Bayer', 33, 'Science');

teacher1.teach();
teacher2.homework();

// Find the oldest Teacher -> Jane
// Find the average age of the teachers -> 39
// Find the youngest teacher -> Adam Bayer
// Get all the fullnames of the teachers -> ['John Doe', 'Jane Donnely', 'Sarah Elly', 'Adam Bayer']

const teachers = [teacher1, teacher2, teacher3, teacher4];

// teachers.forEach(x => console.log(x.fname));
// console.log(teachers.length);
console.log("Find the oldest Teacher")
const oldest = teachers.reduce((acc, curr) => {
    if(curr.age > acc.age) acc = curr;
    return acc;
}, teachers[0]);

console.log("oldest teacher is ", oldest.fname);

console.log("Find the average age of the teachers ")

const totalAge = teachers.reduce((acc, curr) => acc += curr.age, 0)
console.log("average age of teachers are" , totalAge/teachers.length);

const youngest = teachers.reduce((acc, curr) => {
    if(curr.age < acc.age) acc = curr;
    return acc;
}, teachers[0]);
console.log("Youngest teacher name is", youngest.fname, youngest.lname)

const fullnames = teachers.map(x => `${x.fname} ${x.lname}`);
console.log(fullnames);
