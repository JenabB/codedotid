// reducer berfungsi untuk accumulasi element
const itemPrice = [45.5, 90.8, 12.5];

function add(sum, value) {
  return sum + value;
}

//cara ke 1 call function add
//const sum = itemPrice.reduce(add);

const total = itemPrice.reduce((acc, el) => acc + el, 0);

console.log(total);

console.log();
