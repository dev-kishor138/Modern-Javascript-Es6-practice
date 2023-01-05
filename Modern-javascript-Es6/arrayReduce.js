var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = num.reduce((prevValue, currentValue, currentIndex, arr) => {
  return prevValue + currentValue;
}, 0);

console.log(sum);
