function howManyKabisat(start, end) {
  const kabisat = [];
  for (let index = start; index <= end; index++) {
    let ya = new Date(index, 1, 29).getDate() === 29;
    if (ya === true) {
      kabisat.push(index);
    }
  }

  return `total tahun kabisat: ${kabisat.length}: ${kabisat}`;
}

console.log(howManyKabisat(1997, 2021)); //Total tahun kabisat : 6 tahun = 2000 2004 2008 2012 2016 2020
