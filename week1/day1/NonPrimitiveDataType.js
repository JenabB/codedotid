const product = { id: 1, name: "indomie", price: 3000 }; //objecy

const carts = [
  { id: 1, name: "Buku", price: 20000 },
  { id: 2, name: "Novel", price: 100000 },
  { id: 3, name: "Komik", price: 40000 },
]; //Array

const orderDate = new Date(); //Date

function TotalHarga(totalHarga) {
  return totalHarga;
} //function

console.log(typeof product);
console.log(typeof carts);
console.log(typeof orderDate);
console.log(TotalHarga(2000));
