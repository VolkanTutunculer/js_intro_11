const Car = require("./prototypes/car");


const car1 = new Car('Tesla', 'x', 2023, 80000);
const car2 = new Car('BMW', 'X7', 2022, 60000);
const car3 = new Car('Tesla', 'Y', 2020, 27000);

const cars = [car1, car2, car3];

cars.forEach(x => {
    console.log(x);
    x.drive();
    car1.brakes();
    console.log(`${x.year} ${x.make} ${x.model} is $${x.price}`);
    console.log(); // provides space between each car
})

for(const x of cars){
    console.log(x);
    x.drive();
    car1.brakes();
    console.log(`${x.year} ${x.make} ${x.model} is $${x.price}`);
    console.log(); // provides space between each car

}

