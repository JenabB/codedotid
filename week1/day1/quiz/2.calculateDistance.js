// ---------------------------------------------------------------------------
//Soal 2: Menghitung jarak
function calculateDistance(a, t) {
  if (isNaN(a) || isNaN(t)) {
    return "input must an number";
  } else if (a <= 0 || t <= 0) {
    return `acceleration or time must be >== 0`;
  }

  const distance = (1 / 2) * a * (t * t);

  return `jarak yang ditempuh adalah ${distance} m/s`;
}
console.log("Soal 2: Menghitung jarak");
console.log(calculateDistance("a", "t")); //input must an number
console.log(calculateDistance(-1, 9)); //acceleration or time must be >== 0
console.log(calculateDistance(50, 60)); //90000
console.log("\n");
