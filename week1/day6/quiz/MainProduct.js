import Product from "./Product.js";

//create product
const prod1 = new Product(1, "Samsung A1", "HP", 1500000, 2);
const prod2 = new Product(2, "Dell Ultrabook", "COMPUTER", 7850000, 2);
const prod3 = new Product(3, "Mesin cuci lg", "ELECTRONIC", 3500000, 1);
const prod4 = new Product(4, "iphone", "HP", 6000000, 2);
const prod5 = new Product(5, "Asus Laptop", "COMPUTER", 6500000, 4);

//declare listcart
let listCart = [];

const addToCart = (product) => {
  listCart = [...listCart, product];
  return listCart;
};

addToCart(prod1);
addToCart(prod2);
addToCart(prod3);
addToCart(prod4);
addToCart(prod5);

//filtered cart > 3000.000
const filteredCart = listCart.filter((product) => product.price > 3000000);

//create order
const createOrder = async () => {
  const date = new Date();
  if (filteredCart.length > 0) {
    return Promise.resolve(
      `${date.getFullYear()}${date.getMonth()}${date.getDay()}#0001`
    );
  } else {
    return Promise.reject("tidak ada produk");
  }
};

createOrder()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const payment = async (pay) => {
  if (pay !== "undefined") {
    if (pay === "BCA") {
      return Promise.resolve("Bayar menggunakan BCA");
    } else if (pay === "Shopee Pay") {
      return Promise.resolve("Bayar menggunakan Shopee Pay");
    } else if (pay === "OVO") {
      return Promise.resolve("Bayar menggunakan OVO");
    }
  } else {
    return Promise.reject("pilih metode pembayaran");
  }
};

payment("BCA")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const displayTagihan = async (cart, pay) => {
  if (cart.length === 0) {
    return Promise.reject("blm ada produk yang ditambahkan");
  } else if (pay === "undefined") {
    return Promise.reject("blm ada metode pembayaran");
  } else {
    return `display tagihan`;
  }
};
