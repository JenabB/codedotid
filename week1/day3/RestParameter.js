function cetakAngka(n1, n2, n3, n4) {
  return n1 + " " + n2 + " " + n3 + " " + n4;
}

function cetakNumber(...numbers) {
  return numbers + " ";
}

function sumNumber(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  console.log(sum);
}

console.log(cetakAngka(1, 2, 3, 4));
console.log(cetakNumber(1, 2, 3, 4));
console.log(sumNumber(1, 2, 3, 4));
