// // ---------------------------------------------------------------------------
// //Soal 8: Elapsed Time

function getPeriodTimes(seconds) {
  if (isNaN(seconds)) {
    return `${seconds} is not number`;
  }

  seconds = Number(seconds);

  //math floor untuk dibulatkan kebawah
  const hari = Math.floor(seconds / (3600 * 24));
  const jam = Math.floor((seconds % (3600 * 24)) / 3600);
  const menit = Math.floor((seconds % 3600) / 60);
  const detik = Math.floor(seconds % 60);

  return `${hari} hari ${jam} jam ${menit} menit ${detik} detik`;
}

console.log("Soal 8: Elapsed Time");
console.log(getPeriodTimes("700005A")); //700005A is not number
console.log(getPeriodTimes("700005")); //8 hari 2 jam 26 menit 45 detik
console.log("\n");
