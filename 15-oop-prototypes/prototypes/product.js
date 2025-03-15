class Product {
    constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    sell(num) {
        if(this.quantity >= num) this.quantity -= num;
        else throw new Error (`Stock is not enought. stock is ${this.quantity}`)
    }

    return(num) {
        this.quantity += num;
    }

    applyDiscount(percentage){
        if(percentage <= 1) this.price -= this.price*percentage;
    }
}

module.exports = Product;