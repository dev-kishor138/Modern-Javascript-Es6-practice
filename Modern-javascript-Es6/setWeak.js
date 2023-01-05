function log(anything) {
  console.log(anything);
}

// Array declare হয় দুইটি syntax এ
// let myArray = []; // ১। litteral Syntax
// let myArray2 = new Array(); // ২/ constructor syntax

// set এর ক্ষেত্রে constructor syntax use করতে হবে
let myArray = new Array();
let mySet = new Set();
// mySet.add(5).add(90).add("India").delete("India");
// mySet.add(5).add(90).add("India").clear("India");
mySet.add(5).add(90).add("India");
log(mySet.size);
// mySet.add("Bangladesh");
// // mySet.delete(5)
// log(mySet.has(5));
log(mySet);

// set from Array
function addSet(something) {
  console.log(something);
}
let arr = [1, 2, 3, 4];
let set2 = new Set(arr);
let set3 = new Set("Bangladesh");
addSet(set2);
for (let value of set3) {
  log(value);
}

// Array from set
// first way
function a(s) {
  console.log(s);
}
let b = [1, 2, 3, 4];
let c = new Set(b);
a([...c]);

// Second way
function d(s) {
  console.log(s);
}
let e = [1, 2, 3, 4];
let f = new Set(e);
d(Array.from(f));

// Set usage
// set এর সব element সবসময় Uniqe থাকে
function g(s) {
  console.log(s);
}
let h = [1, 2, 3, 4];
let i = new Set(h);
i.add(5);
g(i);

let j = [1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 9];
log([...new Set(j)]);
log(new Set(j));

// set OPeration
const k = new Set([1, 2, 3]);
const l = new Set([4, 3, 2]);
const union = new Set([...k, ...l]);
log(union);

const intersection = new Set([...k].filter((x) => l.has(x)));
log(intersection);

const difference = new Set([...k].filter((x) => !l.has(x)));
log(difference);

// WeakSet
// WeakSet  এ আমরা শুধু Object add করতে পারব
const ws = new WeakSet([{ a: "জসিম" }, { b: 2 }]);
// ws.add({ name: "Kishor" });
log(ws);
