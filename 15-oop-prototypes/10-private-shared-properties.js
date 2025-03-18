class Citizen {
  // public property
  country = "US";
  batch = 11;

  // private property
  #SSN;

  constructor(fullname, age) {
    this.fullname = fullname;
    this.age = age;
  }

  getSSN(adminPassword) {
    if (adminPassword === "SecretPassword") return this.#SSN;
    throw new Error("You are Not allowed!!!");
  }

  setSSN(ssn) {
    if (ssn.length === 9) this.#SSN = ssn;
    else throw new Error("The SSN is not correct");
  }
}

const c1 = new Citizen("John Doe", 25);
const c2 = new Citizen("John Smith", 25);

console.log(c1);
console.log(c2);


c1.setSSN('123121234');
console.log(c1.getSSN("SecretPassword"));
