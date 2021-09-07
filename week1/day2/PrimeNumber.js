//prime number: 2,3,5,7,11,13,17

function isPrimeNumber(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }

    return true;
  }
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(5));
console.log(isPrimeNumber(7));
