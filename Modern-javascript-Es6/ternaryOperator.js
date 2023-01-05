// simple way
var age = 17;
var type;
if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}
console.log(type);

// use ternary Operator
var age2 = 9;
var type2 = age2 >= 18 ? "adult" : age < 10 ? "child" : "young";
console.log(type2);

var a = 8;
var access = a > 10;
console.log(access);
