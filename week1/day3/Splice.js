const programming = ["java", "dart", "golang", "js", "ruby", "rust", "R"];

//memotong dari index rust
const rust = programming.indexOf("rust");
// programming.splice(rust);

//memotong dari index ke 4 sampai 2-1 index berikutnya
// programming.splice(4, 2);
//menghapus index ke 4 sampai 2-1 index, dan element penggantinya
programming.splice(4, 2, "ts", "c");

console.log();
