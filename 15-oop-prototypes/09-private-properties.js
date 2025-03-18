class Customer {
    // private property
    #sectretInformation = 'Hello';

    // publick property
    notSecret = 'Hi';

    // puublic property - all the instances can access this

    constructor(fullname, address) {
        this.fullname = fullname;
        this.address = address;
    }
}

const cust1 = new Customer();
const cust2 = new Customer();

console.log(cust1.sectretInformation); // if you use # it will be unusable
console.log(cust2.notSecret);