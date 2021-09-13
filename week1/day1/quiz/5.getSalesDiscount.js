// ---------------------------------------------------------------------------
//Soal 5: Menghitung Total Belanja yang sudah ditambahkan diskon dan pajak

function getSalesDiscount(price, tax, discount) {
  if (isNaN(price) || isNaN(tax) || isNaN(discount)) {
    return "Price, Tax, Discount harus dalam angka";
  }

  const totalDiscount = price * (discount / 100);
  const priceAfterDiscount = price - totalDiscount;
  const pajak = priceAfterDiscount * (tax / 100);
  const totalPayment = priceAfterDiscount + pajak;

  return `
    Total Sales             : Rp.${price}
    Discount (${discount}%)           : Rp.${totalDiscount}
    PriceAfterDiscount      : Rp.${priceAfterDiscount}
    Pajak (${tax}%)               : Rp.${pajak}
    ----------------------------------------------------
    totalPayment             : Rp.${totalPayment}
    `;
}

console.log(
  "Soal 5: Menghitung Total Belanja yang sudah ditambahkan diskon dan pajak"
);
console.log(getSalesDiscount("a", 1, 5));
console.log(getSalesDiscount(500, "pajak", 5));
console.log(getSalesDiscount("harga", "pajak", "discount"));
console.log(getSalesDiscount(4500, 10, 5));
