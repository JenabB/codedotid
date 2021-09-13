//Soal 1: menghitung luas area lingkaran

function getAreaCircle(radius) {
  const phi = Math.PI;

  if (radius <= 0) {
    return `${radius} <= 0, try higher`;
  } else if (isNaN(radius)) {
    return `${radius} is not number`;
  }

  const areaCircle = phi * (radius * radius);

  return areaCircle;
}

console.log("Soal 1: Menghitung luas area lingkaran");
console.log(getAreaCircle("-1")); //-1 <= 0, try higher
console.log(getAreaCircle("a")); //a is not number
console.log(getAreaCircle(5)); //78.53981633974483
console.log("\n");
