function payment(tglBayar, tglJatuhTempo, jumlahCicilan) {
  const angsuran = 3500000;

  // memeriksa jika jumlah cicilan kurang dari angsuran pokok
  if (jumlahCicilan < angsuran) {
    return `Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran`;
  }

  //mendapatkan tanggal pembayaran
  const tglBayarSplit = tglBayar.split("/");
  const tanggalBayar = new Date(
    tglBayarSplit[2],
    tglBayarSplit[0] - 1,
    tglBayarSplit[1]
  );

  //mendapatkan tanggal jatuh tempo
  const tglJatuhTempoSplit = tglJatuhTempo.split("/");
  const tanggalJatuhTempo = new Date(
    tglJatuhTempoSplit[2],
    tglJatuhTempoSplit[0] - 1,
    tglJatuhTempoSplit[1]
  );

  //menghitung jarak bayar ke tempo dalam ms
  const jarakBayarDanTempo = tanggalBayar - tanggalJatuhTempo;

  //pembagi milisecond
  const miliSecondPerDay = 1000 * 60 * 60 * 24;

  let denda = 0;
  //jarak bayar dalam hari
  const countDay = jarakBayarDanTempo / miliSecondPerDay;

  //jika terlalu cepat, maka pembayaran belum tersedia
  if (countDay < -5) {
    return `pembayaran bulan ${tglBayarSplit[0]} belum tersedia`;
  }
  //denda akan berlaku ketika terlambat membayar
  else if (countDay > 0) {
    denda = angsuran * (2 / 1000) + countDay;
  }

  const totalBayar = angsuran + denda;

  return `
  -------------------------------
  Tanggal Bayar : ${tglBayar}
  Jatuh Tempo : ${tglJatuhTempo}
  ----------------------------------
  Tagihan bulan ${tglBayarSplit[0]},${tglBayarSplit[2]} = Rp ${angsuran}
  Denda =  ${denda} (terlambat ${countDay > 0 ? countDay : 0} hari)
  Total = Rp.${totalBayar} (lunas)

  `;
}

console.log(payment("09/30/2021", "09/27/2021", 50000)); //Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran
console.log(payment("09/29/2021", "09/27/2021", 3500000)); //Tagihan bulan 9 belum tersedia
console.log(payment("09/27/2021", "09/27/2021", 3500000));
/**
--------------------------
Tanggal Bayar : 27/9/2021
Jatuh Tempo :
27/9/2021
--------------------------
Tagihan bulan 9,2021 = Rp.3500000
Denda = Rp.0 (terlambat 0 hari)
Total = Rp.3500000 (lunas)
--------------------------
Kwitansi ini sebagai alat bukti pembayaran
*/
