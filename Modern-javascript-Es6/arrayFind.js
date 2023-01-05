var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = numbers.find(function (currentValue, currentIndex, arr) {
  return currentValue > 4;
});
console.log(output);
