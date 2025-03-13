const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
];

let olderThan30 = 0;

for (let user of users) {
    if (user.age > 30) {
        olderThan30++;
    }
}

console.log(olderThan30)

// •	Count how many users live in Chicago     			-> 2
// •	Count how many users live in IL     				-> 3

let cityAsChicago = 0;
let stateAsIL = 0;
for (let user of users) {
    if (user.address.city === "Chicago") {
        cityAsChicago++;
    }
    if (user.address.state === "IL") {
        stateAsIL++;
    }
}
console.log(cityAsChicago);
console.log(stateAsIL);


const liveInChicago = users.reduce((counter, user) => user.address.city === 'Chicago' ? counter + 1 : counter, 0);
console.log(liveInChicago);

const liveInIL = users.reduce((counter, user) => user.address.state === 'IL' ? counter + 1 : counter, 0);
console.log(liveInIL);

//Count how many users' emails has Gmail domain

const gmailCount = users.reduce((counter, user) => user.email.includes('gmail') ? counter + 1 : counter, 0);
console.log(gmailCount)


// Find and store all the users name younger than 35                     -> [ 'Tech', 'Jane', 'Alex' ]
// Find average of ages of all users                                                           -> 28

let usersYoungerThan35 = [];
for (let user of users) {
    if (user.age < 35) {
        usersYoungerThan35.push(user.firstName)
    }
}
console.log(usersYoungerThan35)
console.log("2.way")
//OR
const youngerthan35 = users.reduce((NamerArr , user) => user.age < 35 ? NamerArr.concat(user.firstName) : NamerArr, [])
console.log(youngerthan35)
// or
console.log("3.way")
const youngerthan352 = users.filter(user => user.age <35).map(user => user.firstName)
console.log(youngerthan352)



console.log("my way")
function averageAge(){
    let counter = 0;
    let sumAge = 0;
    for(const user of users){
        sumAge += user.age;
        counter++;
    }
    return sumAge/counter;
}

console.log(averageAge());

console.log("Bilal way")
const averageOfAges = users.reduce((count, user) => count + user.age,0) / users.length 
console.log(averageOfAges)
