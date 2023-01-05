for (let i = 0; i <= 5; i++) {
  console.log(i);
}
//for in
const myObj = {
  name: "Javascript",
  estd: "1995",
  founder: "Brendan Erich",
};
for (element in myObj) {
  console.log(element);
}

const myArray = [67, 34, 83, 97, 43, 54, 20, 70, 31];
for (element of myArray) {
  console.log(element);
}
for (element in myArray) {
  console.log(element);
}

const myString = "I love Bangladesh";
for (element of myString) {
  console.log(element);
}
for (element in myString) {
  console.log(element);
}
