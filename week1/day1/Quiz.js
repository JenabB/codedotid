//Soal 1: menghitung luas area lingkaran

function getAreaCircle(radius) {
  const phi = Math.PI;

  if (radius <= 0) {
    return `${radius} <= 0, try higher`;
  } else if (isNaN(radius)) {
    return `${radius} is not number`;
  }

  const areaCircle = phi * (radius * radius);

  return areaCircle;
}
console.log("Soal 1: Menghitung luas area lingkaran");
console.log(getAreaCircle("-1")); //-1 <= 0, try higher
console.log(getAreaCircle("a")); //a is not number
console.log(getAreaCircle(5)); //78.53981633974483
console.log("\n");

// ---------------------------------------------------------------------------
//Soal 2: Menghitung jarak
function calculateDistance(a, t) {
  if (isNaN(a) || isNaN(t)) {
    return "input must an number";
  } else if (a <= 0 || t <= 0) {
    return `acceleration or time must be >== 0`;
  }

  const distance = (1 / 2) * a * (t * t);

  return `jarak yang ditempuh adalah ${distance} m/s`;
}
console.log("Soal 2: Menghitung jarak");
console.log(calculateDistance("a", "t")); //input must an number
console.log(calculateDistance(-1, 9)); //acceleration or time must be >== 0
console.log(calculateDistance(50, 60)); //90000
console.log("\n");

// ---------------------------------------------------------------------------
//Soal 3: Konversi suhu dari Fareinheit ke Kelvin
function farenheitToKelvin(f) {
  if (isNaN(f)) {
    return "Farenheit must an number";
  }

  const kelvin = Math.round((f + 459.67) / 1.8);

  return `Convert Farenheit (${f}) to Kelvin = ${kelvin}`;
}

console.log("Soal 3: Konversi suhu F ke K");
console.log(farenheitToKelvin(45));
console.log(farenheitToKelvin("1"));
console.log(farenheitToKelvin("F"));
console.log("\n");

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

// ---------------------------------------------------------------------------
//Soal 6: Menghitung jarak kordinat dalam cartesius
function getCordinat(x1, y1, x2, y2) {
  if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
    return "input kordinat dalam angka";
  }

  const xTotal = parseFloat(x1) - parseFloat(x2);
  const yTotal = parseFloat(y1) - parseFloat(y2);

  const cordinat = Math.sqrt(Math.pow(xTotal, 2) + Math.pow(yTotal, 2));

  return `cordinat = ${cordinat}`;
}

console.log("Soal 6: Menghitung jarak kordinat dalam cartesius");
console.log(getCordinat(3, 4, -4, -5)); //9
console.log(getCordinat("1", "2", "-1", "-2")); //1
console.log(getCordinat("x", "2", "-y", "-2")); //input kordinat dalam angka
console.log(getCordinat(3.2, 4.5, -4.4, -5));
console.log("\n");

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

// // ---------------------------------------------------------------------------
// //Soal 8: Elapsed Time

function getPeriodTimes(seconds) {
  if (isNaN(seconds)) {
    return `${seconds} is not number`;
  }

  seconds = Number(seconds);

  //math floor untuk dibulatkan kebawah
  const hari = Math.floor(seconds / (3600 * 24));
  const jam = Math.floor((seconds % (3600 * 24)) / 3600);
  const menit = Math.floor((seconds % 3600) / 60);
  const detik = Math.floor(seconds % 60);

  return `${hari} hari ${jam} jam ${menit} menit ${detik} detik`;
}

console.log("Soal 8: Elapsed Time");
console.log(getPeriodTimes("700005A")); //700005A is not number
console.log(getPeriodTimes("700005")); //8 hari 2 jam 26 menit 45 detik
console.log("\n");

// ---------------------------------------------------------------------------
//Soal 9: Random Password

function getRandomPassword(s) {
  if (typeof s !== "string") {
    return "value must be character";
  } else if (s * 1 == s) {
    return "value must be character";
  } else if (s.length < 6) {
    return "length must more than 6";
  }

  const randomPassword =
    s.charAt(Math.random() * s.length) +
    s.charAt(Math.random() * s.length) +
    s.charAt(Math.random() * s.length) +
    s.charAt(Math.random() * s.length) +
    parseInt(Math.random() * 10) +
    parseInt(Math.random() * 10) +
    parseInt(Math.random() * 10) +
    parseInt(Math.random() * 10);
  return randomPassword;
}

console.log("Soal 9: Random Password");
console.log(getRandomPassword("123465")); //Value must be character
console.log(getRandomPassword(3422)); //Value must be character
console.log(getRandomPassword("code")); //Length must more than 6
console.log(getRandomPassword("codeid")); //doed3726
console.log("\n");

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

// ---------------------------------------------------------------------------
//Soal 11: Siapa paling berat

function getHeavier(w1, w2, w3) {
  const arrayHeavy = [w1, w2, w3];

  const sortedArray = arrayHeavy.sort();
  return sortedArray[sortedArray.length - 1];
}

console.log("Soal 11: Siapa paling berat");
console.log(getHeavier(12, 45, 70)); //70
console.log(getHeavier(1, 3, 2)); //70
console.log("\n");
