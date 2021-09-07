//string to date

function strToDate(date) {
  const splitDate = date.split("/");

  if (
    splitDate[0].length !== 2 &&
    splitDate[1].length !== 2 &&
    splitDate[2].length !== 4
  ) {
    return `${date} bad format date`;
  }

  for (let index = 0; index < splitDate.length; index++) {
    if (isNaN(splitDate[index])) {
      return `${date} bad format date`;
    }
  }

  const year = splitDate[2];
  const month = splitDate[0] - 1;
  const day = splitDate[1];

  const result = new Date(year, month, day);

  return result;
}

console.log(strToDate("12/30/2021")); //Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate("12/30/21"));
console.log(strToDate("12/aa/bb")); //12/aa/bb bad format date
