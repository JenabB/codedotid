const products =
  "LG,Asus 5432,Mix For Youtuber,Bluetooth Adapter,Solo Leveling Webtoon,Panasonic,Air Conditioner,Karaoke,Bazooka,PowerBank,24 Hours,Backpack of Holding,Game Box 5,Universal Gadget Charger USB,Squirming Tentacle USB,Fish Aquarium,Intel Processor 8 core,Space Bar Key board Organizer,USB Hub Pop,USB Pet Rock,Powerstation 5,Dual Heated Travel Mug,Crosley Collegiate,Portable USB,Turntable Hoodie,AK-47";

function filterProduct(products, index) {
  productsArray = products.split(",");

  console.log(productsArray);

  const groupingLabel = productsArray.reduce((r, e) => {
    //mendapatkan nama awal dan dibesarkan
    let groupLabel = e.substr(0, 1).toUpperCase();
    // Cek jika groupLabel belum terisi
    if (!r[groupLabel]) r[groupLabel] = { groupLabel, data: [e] };
    // Cek jika groupLabel sudah terisi, maka push e
    else r[groupLabel].data.push(e);
    // Kembalikan array yang hanya berisi groupLabel saja
    return r;
  }, []);

  // Tambahkan ke dalam newData
  let groupedContact = Object.values(groupingLabel);
  console.log(groupedContact);
}

console.log(filterProduct(products));
