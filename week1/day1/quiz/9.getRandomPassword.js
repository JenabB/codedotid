// ---------------------------------------------------------------------------
//Soal 9: Random Password

function getRandomPassword(s) {
  if (typeof s !== "string") {
    return "value must be character";
  } else if (s * 1 == s) {
    return "value must be character";
  } else if (s.length < 6) {
    return "length must more than 6";
  }

  const randomPassword =
    s.charAt(Math.random() * s.length) +
    s.charAt(Math.random() * s.length) +
    s.charAt(Math.random() * s.length) +
    s.charAt(Math.random() * s.length) +
    parseInt(Math.random() * 10) +
    parseInt(Math.random() * 10) +
    parseInt(Math.random() * 10) +
    parseInt(Math.random() * 10);
  return randomPassword;
}

console.log("Soal 9: Random Password");
console.log(getRandomPassword("123465")); //Value must be character
console.log(getRandomPassword(3422)); //Value must be character
console.log(getRandomPassword("code")); //Length must more than 6
console.log(getRandomPassword("codeid")); //doed3726
console.log("\n");
