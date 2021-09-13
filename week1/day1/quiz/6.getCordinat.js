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
