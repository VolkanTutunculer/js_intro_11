// key is always string
// value can be null, undefined, number, boolean, string, array, object, function

const person = {
    fname: 'John',
    lname: 'Doe',
    age: 25,
    married: undefined,
    isMember: true,
    favMOvies: ['The Batman', 'The Flash'],
    address: {
        street1: '2800 st river ',
        street2: 'Ste 310',
        city: 'Des Plaines',
        state: 'IL',
        zip: 2345,
    }
};

//console.log(person);

const cat = {
    name: 'Ra',
    age: 1,
    sound: function () {
        console.log('MEOW!');
    },
    getMood: function() {
        return 'HUNGRY';
    },
    getInfo: function() {
        console.log(`Name is ${this.name}, and age is ${this.age}`); // we are using this which refers cat. // when we have multiple objects cat wont work.
    }
};

console.log(cat.name); // Ra
cat.sound();

console.log(cat.getMood());

cat.getInfo();