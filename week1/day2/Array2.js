const numbers = [32, 12, 14, 1, 6, 7, 9, 9];

const sortNumbers = numbers.sort((a, b) => b - a); //high to low

console.log(sortNumbers);

const foods = ["sup", "pizza", "pasta", "mie ayam", "bakso"];

const sortFoods = foods.sort();
const reverseFoods = foods.reverse();

const sortFoods2 = foods.sort((a, b) => (a > b ? 1 : -1));

console.log(sortFoods);
console.log(reverseFoods);
console.log(sortFoods2);
