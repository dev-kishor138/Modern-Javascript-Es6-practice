const user = {
  id: 01,
  name: "Kishor",
  age: 20,
  address: "Rangpur",
};

var name2 = user.name;
console.log(name2);
var name1 = user["name"];
console.log(name1);

// destructuring methods

const { name: title } = user;
console.log(title);

//nested objects
const user2 = {
  id: 02,
  name: "Rakib",
  age: 24,
  address: "Dhaka",
  //   education: {
  //     degree: "masters",
  //   },
};

const { education: { degree } = {} } = user2;
console.log(degree);

// Array Destructuring
var numbers = [1, 2, 3, 4, 5, 6, 7];
var [a, , b, , , c] = numbers;
console.log(a, b, c);

// value swaping
var a = 1;
var b = 2;
// the old way
var temp = a;
a = b;
b = temp;
console.log(a, b);

// the new way
var x = "Rohim";
var y = "Korim";

[y, x] = [x, y];
console.log(x, y);
