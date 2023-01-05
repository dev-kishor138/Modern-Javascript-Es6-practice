const numbers = [1, 2, 3, 4, 5, 6];

const newArray = [...numbers, "Kishor", "Kearmot", "Shahid"];
console.log(newArray);

// spread operator another way
var num = [1, 2, 3];
var a = [...num]; //exact copy not change in a
num.push(4);
console.log(a);
console.log(num);
var b = num; // but b changed
console.log(b);

// another way
var x = [1, 2, 3];
var y = [4, 5, 6];
var z = [...x, ...y];
console.log(z);

//spread operator use in Object
const myObj1 = {
  a: 1,
  b: 2,
  c: 3,
};
const myObj2 = {
  x: 4,
  y: 5,
  z: 6,
};
console.log({
  ...myObj1,
  ...myObj2,
});
