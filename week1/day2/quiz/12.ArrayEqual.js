const fruitNamesA = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesB = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesC = ["anggur", "apel", "mangga", "alpukat"];

function isArraysEqual(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false
