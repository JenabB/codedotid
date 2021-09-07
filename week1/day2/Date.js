const today = new Date();

console.log(today.getDay());
console.log("bulan" + " " + today.getMonth());
console.log(today.getFullYear());

//get info time
console.log(today.getHours() + "hour");
console.log(today.getMinutes() + "minutes");

//decalration date with argument
const tomorrow = new Date(2021, 8, 8);
console.log(tomorrow);

//declaration with time
const eventDate = new Date("2021-08-12T05:12:00Z");
console.log(eventDate);

//add date
const now = new Date();
const currentDate = now.getDate();
now.setDate(now.getDate() + 3);
console.log(`Booking date: ${now}`);

//compare between date
const startDate = new Date(2021, 8, 7);
const endDate = new Date(2021, 8, 15);

const selisihDate = endDate - startDate;
console.log(`selisih date: ${selisihDate}`);

if (endDate > startDate) {
  console.log(`${endDate} > ${startDate}`);
}

const miliSecondPerDay = 1000 * 60 * 60 * 24;
let countDay = selisihDate / miliSecondPerDay;
console.log(countDay);
