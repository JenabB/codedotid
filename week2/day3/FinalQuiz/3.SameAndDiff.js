const array1 = [
  "Mangga",
  "Apel",
  "Melon",
  "Pisang",
  "Sirsak",
  "Tomat",
  "Nanas",
  "Nangka",
  "Timun",
  "Mangga",
];
const array2 = [
  "Bayam",
  "Wortel",
  "Kangkung",
  "Mangga",
  "Tomat",
  "Kembang Kol",
  "Nangka",
  "Timun",
];

function arraySameAndDiff(a, b) {
  //array yang hanya berisi element yang sama
  const tempSame = a.filter((x) => b.includes(x));

  //hanya berisi nilai yang unik
  const same = Array.from(new Set(tempSame));

  const different = [
    ...a.filter((x) => !b.includes(x)),
    ...b.filter((x) => !a.includes(x)),
  ];

  return `
  ss = ${tempSame}
  same = ${same}
  different = ${different}`;
}

console.log(arraySameAndDiff(array1, array2));
