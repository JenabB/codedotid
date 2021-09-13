const antrian1 = () => {
  console.log("Antrian 1: Beli KFC Paket A");
};

const antrian2 = () => {
  setTimeout(() => {
    console.log("Antrian 2: Beli KFC Paket Hamburger");
  }, 2000);
};

const antrian3 = () => {
  console.log("Antrian 3: Beli KFC Paket C");
};

const antrian4 = () => {
  setTimeout(() => {
    console.log("Antrian 4: Beli KFC Paket Ziva");
  }, 2000);
};

antrian1();
antrian2();
antrian3();
antrian4();
