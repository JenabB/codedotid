const programming = ["java", "dart", "golang", "js", "ruby", "rust", "R"];

const java = programming.includes("java");
console.log(java);

const nums = [2, 4, 19, 15, 198, 7, 1, 1];

const bigNum = nums.find((el) => el > 10);
console.log(bigNum);

const bigNums = nums.filter((el) => el > 10);
console.log(bigNums);

//.map membuat array baru
const byFive = nums.map((el) => el * 5);

//every | cek sesuai kondisi atau tidak
const every = nums.every((el) => el % 2 === 0); //return false
console.log(every);

//some
const some = nums.some((el) => el % 2 === 0); //return true
console.log(some);
