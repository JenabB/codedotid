// ---------------------------------------------------------------------------
//Soal 3: Konversi suhu dari Fareinheit ke Kelvin
function farenheitToKelvin(f) {
  if (isNaN(f)) {
    return "Farenheit must an number";
  }

  const kelvin = Math.round((f + 459.67) / 1.8);

  return `Convert Farenheit (${f}) to Kelvin = ${kelvin}`;
}

console.log("Soal 3: Konversi suhu F ke K");
console.log(farenheitToKelvin(45));
console.log(farenheitToKelvin("1"));
console.log(farenheitToKelvin("F"));
console.log("\n");
