// the old way
var a = 8;
var b = "book";
console.log("I am " + a + ". I read in a " + b + ".");

// the new way
var x = 12;
var y = "football";
console.log(`I am ${x}. I play ${y}`);

// Taged Template
function modifire(strings, ...values) {
  console.log(strings);
  console.log(values);
}
const player1 = "Shakib";
const player2 = "Tamim";

console.log(modifire`we have ${player1} and ${player2} in our cricket team.`);

// mr add in templates
function modifire2(strings, ...values) {
  const m = strings.reduce((prev, current) => {
    return prev + current + (values.length ? "Mr. " + values.shift() : "");
  }, "");
  return m;
}
const player3 = "Shakib";
const player4 = "Tamim";

console.log(modifire2`we have ${player3} and ${player4} in our cricket team.`);
