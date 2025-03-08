const dog = {
    name: 'Johnny',
    age: 3,
    getInfo: function (num) {
        return this.name + ' ' + (this.age + num); // it returns dog itself // IT REFES CURRENT OBJECT
    }
}

console.log(dog);
console.log(dog.getInfo(3));

const doMath = {
    pi: 3.14,
    sum: function (num1, num2) {
        return num1 + num2;
    },
    multiply: function (num1, num2) {
        return num1 * num2;
    }
};
console.log(doMath.pi);
console.log(doMath.sum(3, 5)); // 8
console.log(doMath.multiply(3, 5)); // 15


