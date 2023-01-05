// implicit binding
var person = {
  name: "Kishor",
  age: 24,
  printName: function () {
    console.log(this.name);
  },
};

person.printName();

var printPlayerNameFunction = function (obj) {
  obj.printPlayerName = function () {
    console.log(this.name);
  };
};
var sakib = {
  name: "Sakib",
  age: 37,
};

var tamim = {
  name: "Tamim",
  age: 39,
};

printPlayerNameFunction(sakib);
printPlayerNameFunction(tamim);

sakib.printPlayerName();
tamim.printPlayerName();

var man = function (name, age) {
  return {
    name: name,
    age: age,
    printManName: function () {
      console.log(this.name);
    },
    father: {
      name: "Mr. xxx",
      printManName: function () {
        console.log(this.name);
      },
    },
  };
};

var rakib = man("Rakib", 34);
rakib.printManName();
rakib.father.printManName();

// explicit binding
const printMyName = function (v1, v2, v3) {
  console.log(`${this.name} is ${v1}, ${v2}, ${v3}`);
};

var nadim = {
  name: "Nadim",
  age: 20,
};

var v1 = "Handsome";
var v2 = "all-rounder";
var v3 = "Best Player";

printMyName.call(nadim, v1, v2, v3);

var v = [v1, v2, v3];
printMyName.apply(nadim, v);

var newFunc = printMyName.bind(nadim, v1, v2, v3);
newFunc();

// new binding
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(`${this.name} is ${this.age} years old`);
}

var soikot = new Person("Soikot", 35);

// window binding
var printOtherName = function () {
  console.log(window === this);
  console.log(this.name);
};
var fahim = {
  name: "Fahim",
};
printOtherName();
