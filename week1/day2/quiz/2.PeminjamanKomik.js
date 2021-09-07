function tagihanKomik(minjam, kembali, jumlahPinjam) {
  const totalHargaPinjam = jumlahPinjam * 2500; //jumlah komik x 2500

  //memisahkan menjadi array
  const minjamSplit = minjam.split("-");

  for (let index = 0; index < minjamSplit.length; index++) {
    if (isNaN(minjamSplit[index])) {
      return `${minjam} bad format date`;
    }
  }

  const tanggalMinjam = new Date(
    minjamSplit[2],
    minjamSplit[0] - 1,
    minjamSplit[1]
  );

  const kembaliSplit = kembali.split("-");

  for (let index = 0; index < kembaliSplit.length; index++) {
    if (isNaN(kembaliSplit[index])) {
      return `${kembali} bad format date`;
    }
  }

  const tanggalKembali = new Date(
    kembaliSplit[2],
    kembaliSplit[0] - 1,
    kembaliSplit[1]
  );

  const jarak = tanggalKembali - tanggalMinjam;
  const miliSecondPerDay = 1000 * 60 * 60 * 24;
  let countDay = jarak / miliSecondPerDay;

  const totalTagihan = countDay * totalHargaPinjam;

  return `
  total hari: ${countDay} hari
  total komik: ${jumlahPinjam} x 2500
  --------------------------------------
  Total tagihan: Rp.${totalTagihan}

  `;
}

console.log(tagihanKomik("09-03-20xx", "09-06-2021", 4)); //Tgl.Pinjam 09-03-20xx not valid formated date
console.log(tagihanKomik("09-03-2021", "09-mm-2021", 4)); //Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-20xx", "09-mm-2021", 4)); //Tgl.Pinjam 09-03-20xx & Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-2021", "09-06-2021", 4));

/**
Total Hari = 3
Total Komik = 4 x 2500
------------------------
Total Tagihan =Rp.30000
*/
