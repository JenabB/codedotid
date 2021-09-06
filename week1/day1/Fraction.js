//uang 150rb dipecah ke 50rb, 20rb dan 10rb
const money = 115000;

let limaPuluhRb, duaPuluhRb, sepuluhRb, limaRb, sisa;

limaPuluhRb = parseInt(money / 50000);

sisa = money % 50000;

duaPuluhRb = parseInt(sisa / 20000);
sisa = sisa % 20000;

sepuluhRb = parseInt(sisa / 10000);
sisa = sisa % 10000;

limaRb = parseInt(sisa / 5000);
sisa = sisa % 5000;

console.log(`50rb = ${limaPuluhRb} lembar
20rb = ${duaPuluhRb} lembar
10rb = ${sepuluhRb} lembar
5rb = ${limaRb} lembar
`);
