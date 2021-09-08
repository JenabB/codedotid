const foods = ["sup", "pizza", "pasta"];

if (Array.isArray(foods)) {
  console.log("food is array");
}

//forEach cuman bisa array
foods.forEach((food) => console.log(food));
