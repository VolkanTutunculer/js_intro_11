// After ES6

class Car {
  constructor(make, model, color, price) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.price = price;
  }
}

const car1 = new Car("Buick", "Envision", "Black", 45000);

console.log(car1.make);

// Before ES6

// Constructure Function

function Phone(brand, color, price) {
  this.brand = brand;
  this.color = color;
  this.price = price;
}

Phone.prototype.call = function(){
    console.log(`${this.brand} can make a call !!!`)
}

Phone.prototype.text = function(){
    return `${this.brand} can text !!!`
}
 
const phone1 = new Phone("Sony", "Black", 999.99);
const phone2 = new Phone("Samsung", "Silver", 799.99);
const phone3 = new Phone("Apple", "White", 1299.99);

phone1.call();
console.log(phone2.text());

