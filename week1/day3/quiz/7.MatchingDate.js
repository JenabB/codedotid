const dates = [
  new Date(2021, 10, 20),
  new Date(2019, 3, 12),
  new Date(2020, 5, 23),
  new Date(2022, 3, 18),
];

function matchingDate(dates, year) {
  const matchedDate = dates.find((date) => date.getFullYear() === year);
  return matchedDate;
}

console.log(matchingDate(dates, 2019)); //Sun Apr 12 2020 00:00:00 GMT+0700 (Western Indonesia Time)
