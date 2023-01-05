// import { pi, a } from "./external.js"; // named import
// console.log(pi, a);

// another way
// import * as test from "./external.js";
// console.log(test.a);

//import default
import external, { a, pi } from "./external.js";
external();
console.log(a, pi);
