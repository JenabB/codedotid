function triangle(start, end) {
  let num = 0;
  let string = "";

  for (let i = start; i < end; i++) {
    let string = "";
    for (let j = 0; j < i; j++) {
      string = string + " " + (i + j);
    }
    console.log(string);
  }
  return string;
}

console.log(triangle(0, 8));
