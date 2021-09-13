const getNomorAntri = (num) => {
  return num;
};

const pilihPaket = (num, paket) => {
  if (num <= 0 && isNaN(num)) {
    return "silahkan antri";
  } else if (paket === "A") {
    return "PAKET A YA BANG";
  } else {
    return "habis bang";
  }
};

const orderKFC = async (paket) => {
  const numAntri = await getNomorAntri(10);
  const menu = await pilihPaket(numAntri, paket);
  return [numAntri, menu];
};

orderKFC("B").then((res) => console.log(res));
