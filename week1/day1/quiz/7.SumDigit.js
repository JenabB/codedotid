// ---------------------------------------------------------------------------
//Soal 7: Menghitunglah jumlah angka yang di input

function sumDigit(n) {
  if (isNaN(n)) {
    return `${n} is not number`;
  } else if (n > 10000) {
    return `${n} harus lebih kecil dari 10000`;
  }

  //membuat array dari n yang telah distringkan dan kemudian dikembalikan Number
  intArr = Array.from(String(n), Number);

  //array tadi dijumlahkan menggunakan reduce
  const sum = intArr.reduce((a, b) => a + b, 0);
  return `${sum}`;
}

console.log("Soal 7: Menghitunglah jumlah angka yang di input");
console.log(sumDigit(1234)); //10
console.log(sumDigit("1234")); //10
console.log(sumDigit(12345)); //12345 harus lebih kecil dari 10000
console.log(sumDigit("a123")); //a123 is not number, try again...
console.log("\n");
