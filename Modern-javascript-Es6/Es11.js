// Big Int
let largest_number = Number.MAX_SAFE_INTEGER;
// largest_nummber += 1;
largest_number = BigInt(largest_number) + 1n;
console.log(largest_number);

// optional Chaining
const language = {
  name: "Javascript",
  creator: "Brendan Eich",
  library: {
    react: {
      company: "Facebook",
    },
  },
};

let company = language?.library?.react?.company;
console.log(company);

// optional chainning in array
let color = ["red", "green", "blue"];
console.log(color?.[3]);

// Nullish coalescing Operator
let language2;
language2 = "";
console.log(language2 ?? "Python");
console.log(language2 || "PHP");
