// x = jumlah rotasi
const arr = [3, 8, 9, 7, 6, 9, 2];

function rotateArray(arr, x) {
  //perulangan sebanyak x (rotate)
  for (let index = 0; index < x; index++) {
    //array sementara
    //spread operator untuk mengkopi arr
    let tempArr = [...arr];
    //unshift menambahkan element ke index pertama
    //pop mengambil element dari index terakhir
    arr.unshift(arr.pop());
    console.log(`${tempArr} => ${arr}`);
  }

  return arr;
}

rotateArray(arr, 3);
