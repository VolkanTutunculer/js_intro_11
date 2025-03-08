const cities = ['Rome', 'Berlin', 'Kyiv'];

// const capItaly = cities[0];
// const capGermany = cities[1];
// const capUkraine = cities[2];

const [capItaly, capGermany, capUkraine] = cities;

console.log(capItaly); // Rome

const account = {
    accholder: 'John Doe',
    email: 'johndoe@email.com',
    password: 'john123',
    username: 'Johnwas',
    DOB: '01/01/2000',
    accNumber: '1234-2345',
    secCode: 123
}

// const username = account.username;
// const password = account.password;
// const email = account.email;

const { username, password, email, DOB: dateOfBirth } = account; // it looks first ayni name. so we dont need to tell like account.username etc. // we can change DOB to dateOfBirth

console.log(username);
console.log(password);
console.log(email);
console.log(dateOfBirth);