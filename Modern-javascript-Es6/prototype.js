// function Person(name, age) {
//   let person = Object.create(Person.prototype);
//   person.name = name;
//   person.age = age;

//   return person;
// }

// new & this keywords
// function Person(name, age) {
//   // let this = Object.create(Personwithnew.prototype);
//   this.name = name;
//   this.age = age;

//   // return person;
// }

// Person.prototype = {
//   eat() {
//     console.log("person is eating");
//   },
//   sleep() {
//     console.log(`Person is sleeping`);
//   },
// };

// const shakib = new Person("Shakib", 35);
// shakib.eat();
// const tamim = new Person("Tamim", 34);
// tamim.sleep();

// const shakib1 = new PersonWithNew("Shakib", 35);
// shakib1.eat();

// class Constructor
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log("person is eating");
  }
  sleep() {
    console.log(`Person is sleeping`);
  }
  play() {
    console.log(`Person is playing`);
  }
}
const shakib = new Person("Shakib", 35);
shakib.eat();
const tamim = new Person("Tamim", 34);
tamim.sleep();
tamim.play();

// Javascript Array prototype

let man = new Array();
console.log(Array.prototype);
