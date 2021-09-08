const fruitNamesA = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesB = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesC = ["anggur", "apel", "mangga", "alpukat"];
const fruitNamesD = ["anggur", "mangga", "alpukat", "apel"];

function isArraysEqual(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }

  const array11 = array1.sort();
  const array22 = array2.sort();

  if (array11 === array22) {
    return true;
  } else if (array11.length !== array22.length) {
    return false;
  } else {
    for (let i = 0; i < array11.length; i++) {
      if (array11[i] !== array22[i]) {
        return false;
      }
    }
  }

  return true;
}

console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false
console.log(isArraysEqual(fruitNamesC, fruitNamesD)); // true
