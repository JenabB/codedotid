const emptyArray = []; //array length = 0;

const foods = ["sup", "pizza", "pasta"];

foods.push("Indomie"); //add element to last index
foods.pop; //delete last index
foods.shift(); //delete first index
foods.unshift("mie ayam"); //add to first index

//display with looping
for (let index = 0; index < foods.length; index++) {
  console.log(foods[index]);
}
console.log(foods + " " + foods.length);

const s = "Bootcamp Academy";

const arr = s.split("");
const arrr = s.split(" ");

console.log(arr);
console.log(arrr);
