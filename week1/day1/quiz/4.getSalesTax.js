// ---------------------------------------------------------------------------
//Soal 4: Menghitung Pajak dari total Penjualan

function getSalesTax(price, t) {
  if (isNaN(price) || isNaN(t)) {
    return `Price dan Pajak harus dalam angka`;
  }

  const tax = t / 100;
  const salesTax = price * tax;
  const salesWithTax = price + salesTax;

  return `
      Total sales: Rp.${price}
      Pajak : ${t}%
      TotalHargaPajak: Rp.${salesWithTax}`;
}

console.log("Soal 4: Menghitung pajak dari penjualan");
console.log(getSalesTax("a", 1)); //Price harus dalam angka
console.log(getSalesTax(500, "pajak")); //Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak")); //Pajak harus dalam angka
console.log(getSalesTax(4500, 5));
console.log("\n");
