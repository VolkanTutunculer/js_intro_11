const obj1 = new Object(); // empty object
const obj2 = {} // empty object

const mouse = {
    name: 'Logitech',
    price: 39.99,
    quantity: 15,
    delivery: ['pick up', 'delivery']
};

console.log(mouse);

// add.property with dot notation or bracklet notation

mouse.colors = ['White', 'Black', 'Blue', 'Pink'] // we mostly use this notation (dot notation)

// mouse['colors'] = ['White', 'Black', 'Blue', 'Pink']; bracklet notation


// remove propertios with dot notation or bracklet notation
delete mouse.delivery;
// delete mouse['delivery']

console.log(mouse);

// update property values with dot notation or bracket notation
mouse.price = 15.99;
// mouse['price'] = 15.99:

// retrieve property values with dot notation or bracklet notation
console.log(mouse.price);
// console.log(mouse['price']);



