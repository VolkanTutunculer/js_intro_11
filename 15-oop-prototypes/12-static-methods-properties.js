class Program {
  // instance property
  name = "SDET";

  // static property  // if you put static at the begining you can make static
  static batchNo = 11;

  // instance methods
  functA() {
    console.log("A");
  }

  static functB() {
    console.log("B");
  }
}


// Program.functA(); // you cannot access instance methods and properties with class name
Program.functB();
console.log(Program.batchNo)


const p1 = new Program();
p1.functA();  // this is the way invoke instance 
console.log(p1.name);