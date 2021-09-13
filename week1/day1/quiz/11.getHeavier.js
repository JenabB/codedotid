// ---------------------------------------------------------------------------
//Soal 11: Siapa paling berat

function getHeavier(w1, w2, w3) {
  const arrayHeavy = [w1, w2, w3];

  const sortedArray = arrayHeavy.sort();
  return sortedArray[sortedArray.length - 1];
}

console.log("Soal 11: Siapa paling berat");
console.log(getHeavier(12, 45, 70)); //70
console.log(getHeavier(1, 3, 2)); //70
console.log("\n");
