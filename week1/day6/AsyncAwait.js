const getNomorAntri = async (nomor) => {
  if (nomor <= 10) {
    return Promise.resolve(nomor);
  } else {
    return Promise.reject("Antrian Habis");
  }
};

getNomorAntri(100)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
