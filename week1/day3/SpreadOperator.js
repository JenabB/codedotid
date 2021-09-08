const numbers = [3, 4, 5, 6, 7];
// spread selalu disimpan di sebelah kanan
const numberCopy = [...numbers];

//merging two array
const ganjil = [1, 3, 5, 7];
const genap = [2, 4, 6, 8];

const bilangan = ganjil.concat(genap);
console.log(bilangan);

const bilanganWithSpread = [...ganjil, ...genap];
console.log(bilanganWithSpread);
