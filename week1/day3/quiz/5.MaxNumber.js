const numbers = [2, 42, 5, 304, 1, 13];

function maxNumber(number) {
  const sortedNumber = Math.max(...number);

  return sortedNumber;
}

console.log(maxNumber(numbers)); // output 304
