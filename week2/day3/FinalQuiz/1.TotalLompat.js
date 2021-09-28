// x = posisi awal
// y = posisi target
// k = jarak tempuh

function totalLompat(x, y, k) {
  const arrayLangkah = [];

  for (let posisi = x; posisi <= y; posisi = posisi + k) {
    arrayLangkah.push(posisi);
  }

  return `
  ${arrayLangkah}
  ${arrayLangkah.length}
  `;
}

console.log(totalLompat(10, 85, 30));
