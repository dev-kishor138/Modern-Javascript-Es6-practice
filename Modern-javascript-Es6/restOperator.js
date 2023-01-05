function myFunc(a, b) {
  console.log(a, b);
}
myFunc(5, 6, 7, 8);

// arguments
function second() {
  console.log(arguments);
}
second(5, 6, 7, 8);

//rest operator
function third(a, ...params) {
  console.log(a);
  console.log(params);
}
third(4, 5, 6, 7, 8);
