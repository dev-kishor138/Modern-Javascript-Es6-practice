var myObject = {
  name: "Kishor Mahmud",
  age: 20,
  address: "Rangpur",
  shift: "2nd",
  department: "computer",
  roll: 154699,
  reg: 1500961394,
};

var keys = Object.keys(myObject);
var values = Object.values(myObject);
var entries = Object.entries(myObject);

console.log(keys);
console.log(values);
console.log(entries);

var a = 9;
var b = 10;
var c = a * b;
var extra = {
  x: 8,
  y: "mamun",
  z: "Rangpur",
  a,
  b,
  c,
};
console.log(extra);
