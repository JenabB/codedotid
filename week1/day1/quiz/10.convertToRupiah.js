// ---------------------------------------------------------------------------
//Soal 10: Konversi Mata Uang

function convertToRupiah(value, currencyType) {
  switch (currencyType) {
    case "yen":
      return `$${value} yen = Rp.${value * 129.88}`;
    case "usd":
      return `${value} USD = Rp.${value * 14272.67}`;
    case "euro":
      return `${value} EUR = Rp.${value * 16932.8}`;
    default:
      return "no match type currency";
  }
}

console.log("Soal 10: Konversi Mata Uang");
console.log(convertToRupiah(1000, "yen")); //1000 yen
console.log(convertToRupiah(100, "usd")); //100 dollar
console.log(convertToRupiah(100, "euro")); //100 dollar
console.log(convertToRupiah(100, "")); //no match type currency
console.log("\n");
